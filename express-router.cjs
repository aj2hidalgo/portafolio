const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json()); //Middleware para el análisis del cuerpo JSON.

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static(path.join(__dirname, "./")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "index.html"));
});

exports.app = app;
