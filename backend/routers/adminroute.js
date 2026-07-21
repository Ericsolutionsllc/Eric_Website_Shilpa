import express from "express";
import {
  adminLogin,
  verifyAdminEmail,
  resetAdminPassword,
  createSubAdmin,
  getAllSubAdmins,
  getSubAdminById,
  updateSubAdmin,
  deleteSubAdmin,
  createViewer,
  getAllViewers,
  getViewerById,
  updateViewer,
  deleteViewer,
} from "../controllers/admincontroller.js";
import upload from "../middleware/upload.js";
import { requireAdminAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/forgot-password/verify-email", verifyAdminEmail);
router.post("/forgot-password/reset", resetAdminPassword);

router.post(
  "/subadmin/create",
  requireAdminAuth,
  upload.single("profileImg"),
  createSubAdmin,
);
router.get("/subadmin/all", requireAdminAuth, getAllSubAdmins);
router.get("/subadmin/single/:id", requireAdminAuth, getSubAdminById);
router.put(
  "/subadmin/update/:id",
  requireAdminAuth,
  upload.single("profileImg"),
  updateSubAdmin,
);
router.delete("/subadmin/delete/:id", requireAdminAuth, deleteSubAdmin);

router.post(
  "/viewer/create",
  requireAdminAuth,
  upload.single("profileImg"),
  createViewer,
);
router.get("/viewer/all", requireAdminAuth, getAllViewers);
router.get("/viewer/single/:id", requireAdminAuth, getViewerById);
router.put(
  "/viewer/update/:id",
  requireAdminAuth,
  upload.single("profileImg"),
  updateViewer,
);
router.delete("/viewer/delete/:id", requireAdminAuth, deleteViewer);

export default router;
