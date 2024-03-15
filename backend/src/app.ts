import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";

const app = express();
dotenv.config({path:path.join(__dirname, "..", "public/.env")})

const FRONTEND_URI1 = process.env.FRONTEND_URI1;
const FRONTEND_URI2 = process.env.FRONTEND_URI2;

if (!FRONTEND_URI1 || !FRONTEND_URI2) {
    throw new Error(
      "Missing FRONTEND_URI1 or FRONTEND_URI2 environment variables"
    );
}

// middlewares
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(
    cors({
      credentials: true,
      origin: [FRONTEND_URI1, FRONTEND_URI2],
    })
);
app.use(cookieParser());


// adding build
app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "build", "index.html")
    );
});

export default app;