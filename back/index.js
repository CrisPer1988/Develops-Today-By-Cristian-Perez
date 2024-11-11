import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";

configDotenv();
const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.use("/api/v1", router);

app.all("*", (req, res) => {
  return res.status(404).json({
    message: `cannot find ${req.originalUrl} on this server!`,
  });
});

app.listen(port, () => {
  console.log(`Running in port ${port}`);
});
