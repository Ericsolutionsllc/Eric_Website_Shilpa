import SubAdmin from "../models/subadminmodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateSubAdminToken = (id) => {
  return jwt.sign(
    {
      id,
      userType: "subadmin",
    },
    process.env.SUBADMIN_JWT_SECRET,
    { expiresIn: "7d" },
  );
};

// ✅ GET ALL SUBADMINS
export const getAllSubAdmins = async (req, res) => {
  try {
    const subadmins = await SubAdmin.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: subadmins.length,
      subadmins,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ GET SUBADMIN BY ID
export const getSubAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    const subadmin = await SubAdmin.findById(id);

    if (!subadmin) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
      });
    }

    res.status(200).json({
      success: true,
      subadmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// subadmin login

export const subAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const subadmin = await SubAdmin.findOne({ email });

    if (!subadmin) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
      });
    }

    // 🔒 Check if subadmin is inactive
    if (subadmin.status === "inactive") {
      return res.status(403).json({
        success: false,
        message: "Your account is inactive. Please contact the administrator.",
      });
    }

    const isMatch = await bcrypt.compare(password, subadmin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateSubAdminToken(subadmin._id);

    res.status(200).json({
      success: true,
      message: "SubAdmin logged in successfully",
      token,
      subadmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
