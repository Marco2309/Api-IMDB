import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import raizRoutes from "./routes/raiz";
import userRoutes from "./routes/users";
import rolesRoutes from "./routes/roles";
import authRouter from "./routes/auth";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(raizRoutes)
app.use("/api/v1", userRoutes);
app.use("/api/v1", rolesRoutes);
app.use("/api/v1", authRouter);

export default app;
