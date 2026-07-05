const { Router } = require("express");
const {
  getMessages,
  getMessageById,
  getNewMessageForm,
  addNewMessage,
} = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", getMessages);

indexRouter.get("/new", getNewMessageForm);

indexRouter.get("/message/:messageId", getMessageById);

indexRouter.post("/new", addNewMessage);

module.exports = indexRouter;
