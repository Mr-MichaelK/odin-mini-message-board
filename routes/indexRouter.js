const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Home screen which displays all messages");
});

indexRouter.get("/new", (req, res) => {
  res.send("New message screen which shows new message form");
});

indexRouter.post("/new", (req, res) => {
  res.send("New message screen which sends a new message");
});

module.exports = indexRouter;
