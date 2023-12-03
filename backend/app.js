import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
export const app = express();
import cors from 'cors'

const corsOptions = {
    origin: 'https://portfolio-web-2rmk.onrender.com/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
  
app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("./frontend/build")));


// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });