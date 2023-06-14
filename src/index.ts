import express from "express"; // ESModule
// const express = require("express"); -> common.js
import * as ServiceEntries from "./services/exampleService";
import toNewDiaryEntry from "./utils";

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
  const toNewDiarie = req.body;

  try {
    const newEntry = toNewDiaryEntry(toNewDiarie);
    // ServiceEntries.addEntry(newEntry);
    res.json(newEntry);
  } catch (err) {
    res.status(400).send("FALLO");
  }
});

app.use("/api/example", exampleRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
