import express from 'express';
import {
  adminLogin,
  verifyAdminEmail,
  resetAdminPassword,
} from '../controllers/admincontroller.js';

const router = express.Router();

router.post('/login', adminLogin);
router.post('/forgot-password/verify-email', verifyAdminEmail);
router.post('/forgot-password/reset', resetAdminPassword);

export default router;


// import express from "express";
// import {
//   sendOTP,
//   verifyOTP,
//   completeLogin,
// } from "../controllers/admincontroller.js";

// const router = express.Router();

// router.post("/send-otp", sendOTP);
// router.post("/verify-otp", verifyOTP);
// router.post("/complete-login", completeLogin);

// export default router;