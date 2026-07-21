import express from "express";
import {
  getAllViewers,
  getViewerById,
  viewerLogin,
} from "../controllers/viewercontroller.js";
import { requireViewerAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/all", requireViewerAuth, getAllViewers);
router.get("/single/:id", requireViewerAuth, getViewerById);
router.post("/login", viewerLogin);

export default router;
