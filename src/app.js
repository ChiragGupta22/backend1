const express = require("express");
const todoRoutes = require("./routes/todo.router");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.router");
const cors = require("cors");

const app = express();

// ✅ CORS OPTIONS
const corsOptions = {
  origin: "https://frontend1-ecru-zeta.vercel.app",
  credentials: true,
};

// ✅ APPLY CORS FIRST
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ✅ MANUAL HEADERS (separate)
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://frontend1-ecru-zeta.vercel.app",
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// ✅ OTHER MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);

module.exports = app;
