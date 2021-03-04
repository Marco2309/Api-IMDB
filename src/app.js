import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import raizRoutes from "./routes/raiz";
import userRoutes from "./routes/users";
import rolesRoutes from "./routes/roles";
import authRouter from "./routes/auth";
import validateJWT from "express-jwt";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();
const secret = process.env.SECRET_KEY;
const options = { secret, algorithms: ["HS384"] };

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(raizRoutes);
app.use("/api/v1", authRouter);
app.use("/api/v1", validateJWT(options), userRoutes);
app.use("/api/v1", validateJWT(options), rolesRoutes);

export default app;
