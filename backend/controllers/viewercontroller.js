import Viewer from "../models/viewermodel.js";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const generateViewerToken = (id) => {
  return jwt.sign({ 
    id,
    userType: "viewer",

  }, process.env.VIEWER_JWT_SECRET, { expiresIn: "7d" });
};


// ✅ CREATE Viewer
export const createViewer = async (req, res) => {
  try {
    const { fullName, email, password, number, gender, status } = req.body;

    const existing = await Viewer.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Viewer already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileImg = req.file ? req.file.path : "";

    const viewer = await Viewer.create({
      fullName,
      email,
      password: hashedPassword,
      number,
      gender,
      profileImg,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Created successfully",
      viewer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ GET ALL Viewer
export const getAllViewers = async (req, res) => {
  try {
    const viewers = await Viewer.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: viewers.length,
      viewers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ GET Viewer BY ID
export const getViewerById = async (req, res) => {
  try {
    const { id } = req.params;

    const viewer = await Viewer.findById(id);

    if (!viewer) {
      return res.status(404).json({
        success: false,
        message: "Viewer not found",
      });
    }

    res.status(200).json({
      success: true,
      viewer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ UPDATE Viewer
export const updateViewer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // 🔥 find existing user FIRST
    const existing = await Viewer.findById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Viewer not found",
      });
    }

    // 🔥 if new image uploaded → delete old image
    if (req.file) {
      if (existing.profileImg) {
        const oldImagePath = path.join(process.cwd(), existing.profileImg);

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // delete old file
        }
      }

      data.profileImg = req.file.path;
    }

    // 🔥 password hash
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updated = await Viewer.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Viewer updated",
      viewer: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ DELETE Viewer
export const deleteViewer = async (req, res) => {
  try {
    const { id } = req.params;

    const viewer = await Viewer.findById(id);

    if (!viewer) {
      return res.status(404).json({
        success: false,
        message: "Viewer not found",
      });
    }

    // 🔥 delete image from folder
    if (viewer.profileImg) {
      const imagePath = path.join(process.cwd(), viewer.profileImg);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Viewer.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Viewer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Viewer login 

export const viewerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const viewer = await Viewer.findOne({ email });

    if (!viewer) {
      return res.status(404).json({
        success: false,
        message: "Viewer not found",
        
      });
    }

     // 🔒 Check if subadmin is inactive
    if (viewer.status === "inactive") {
      return res.status(403).json({
        success: false,
        message: "Your account is inactive. Please contact the administrator.",
      });
    }

    const isMatch = await bcrypt.compare(password, viewer.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateViewerToken(viewer._id);

    res.status(200).json({
      success: true,
      message: "Viewer logged in successfully",
      token,
      viewer
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

