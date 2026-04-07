const express = require("express");
const todoRoutes = require("./routes/todo.router");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.router");
const cors = require("cors");

const app = express();
app.set("trust proxy", 1);
const corsOptions = {
  origin: "frontend1-ochre-theta.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);

module.exports = app;
