import express from "express";
import {dbConnection} from "./database/dbConnection.js";
import dotenv from "dotenv";
import router from "./router/router.js";
import cors from "cors";

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", router);
dbConnection();
export default app;
