import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
