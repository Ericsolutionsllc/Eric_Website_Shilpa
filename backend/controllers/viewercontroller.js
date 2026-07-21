import Viewer from "../models/viewermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateViewerToken = (id) => {
  return jwt.sign({ 
    id,
    userType: "viewer",

  }, process.env.VIEWER_JWT_SECRET, { expiresIn: "7d" });
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

