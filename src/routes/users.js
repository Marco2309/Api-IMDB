import express from "express";
import {
  users,
  roleForUser,
  user,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user";
const router = express.Router();

router.get("/users", users);
router.get("/users/:id", user);
router.post("/users", addUser);
router.post("/users/:userID/roles/:rolesID", roleForUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
