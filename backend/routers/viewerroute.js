import express from "express";
import {
  createViewer,
  getAllViewers,
  getViewerById,
  updateViewer,
  deleteViewer,
  viewerLogin
} from "../controllers/viewercontroller.js";
import upload from "../middleware/upload.js";
import { requireViewerAuth } from "../middleware/authmiddleware.js";


const router = express.Router();

// CREATE
router.post("/create",requireViewerAuth,upload.single("profileImg"), createViewer);

// GET ALL
router.get("/all",requireViewerAuth, getAllViewers);

// GET BY ID
router.get("/single/:id",requireViewerAuth, getViewerById);

// UPDATE
router.put("/update/:id",requireViewerAuth,upload.single("profileImg"), updateViewer);
// DELETE
router.delete("/delete/:id",requireViewerAuth, deleteViewer);

// LOGIN
router.post("/login", viewerLogin);

export default router;