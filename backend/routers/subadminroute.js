import express from "express";
import {
  getAllSubAdmins,
  getSubAdminById,
  subAdminLogin,
} from "../controllers/subadmincontroller.js";
import { requireSubadminAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/all", requireSubadminAuth, getAllSubAdmins);
router.get("/single/:id", requireSubadminAuth, getSubAdminById);
router.post("/login", subAdminLogin);

export default router;
