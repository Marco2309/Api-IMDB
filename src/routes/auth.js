import express from "express";
import {
  defaultt,
  login,
  signup,
  resetPassword,
  updatePassword,
  users,
  roles,
  roleId,
} from "../controllers/auth";

const router = express.Router();

router.get("/", defaultt);
router.post("/api/v1/login ", login);
router.post("/api/v1/signup", signup);
router.get("/api/v1/reset-password ", resetPassword);
router.get("/api/v1/update-password", updatePassword);
router.get("/api/v1/users", users);
router.get("/api/v1/roles", roles);
router.get("/api/v1/roles/:userId", roleId);

export default router;
