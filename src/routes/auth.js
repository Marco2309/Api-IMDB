import express from "express";

import {
  login,
  signup,
  resetPassword,
  updatePassword,
} from "../controllers/auth";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/reset-password", resetPassword);
router.put("/update-password", updatePassword);

export default router;
