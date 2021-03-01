import express from "express";
import {
  addRoles,
  getRoles,
  getRolesId,
  upDateRoles,
  deleteRoles,
} from "../controllers/roles";
const router = express.Router();

router.get("/roles", getRoles);
router.get("/roles/:id", getRolesId);
router.post("/roles", addRoles);
router.put("/roles/:id", upDateRoles);
router.delete("/roles/:id", deleteRoles);

export default router;
