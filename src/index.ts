import express from "express"; // ESModule
// const express = require("express"); -> common.js
import * as ServiceEntries from "./services/exampleService";

import exampleRouter from "./routes/example";

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const port = 3000;

app.get("/ping", (_, res) => {
  console.log("someone pinged here!!! ");
  res.send(ServiceEntries.getEntriesWithoutSensitiveInfo());
});

app.get("/:id", (req, res) => {
  console.log("someone pinged here!!! ");
  const entryExmaple = ServiceEntries.findById(+req.params.id);

  res.send(entryExmaple);
});

app.post("/", (req, res) => {
  const { id, date, status, phone } = req.body;

  const newEntry = ServiceEntries.addEntry(id, date, status, phone);
  res.send(newEntry);
});

app.use("/api/example", exampleRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
