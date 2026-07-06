import express from "express";
import {
  createSubAdmin,
  getAllSubAdmins,
  getSubAdminById,
  updateSubAdmin,
  deleteSubAdmin,
  subAdminLogin
} from "../controllers/subadmincontroller.js";
import upload from "../middleware/upload.js";
import {requireSubadminAuth} from "../middleware/authmiddleware.js";


const router = express.Router();

// CREATE
router.post("/create",requireSubadminAuth,upload.single("profileImg"), createSubAdmin);

// GET ALL
router.get("/all",requireSubadminAuth, getAllSubAdmins);

// GET BY ID
router.get("/single/:id",requireSubadminAuth, getSubAdminById);

// UPDATE
router.put("/update/:id",requireSubadminAuth,upload.single("profileImg"), updateSubAdmin);
// DELETE
router.delete("/delete/:id",requireSubadminAuth, deleteSubAdmin);

// LOGIN
router.post("/login", subAdminLogin);

export default router;