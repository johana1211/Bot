import express from "express"; // ESModule
// const express = require("express"); -> common.js

import exampleRouter from "./routes/example";

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const port = 3000;

app.get("/ping", (_, res) => {
  console.log("someone pinged here!!! ");
  res.send("pong");
});

app.use("/api/example", exampleRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
