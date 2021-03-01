import express from "express";

import { defaultt } from "../controllers/auth";

const router = express.Router();

router.get("/", defaultt);

export default router;
