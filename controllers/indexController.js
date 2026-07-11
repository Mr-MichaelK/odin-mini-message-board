const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getMessageById(req, res) {
  const index = parseInt(req.params.messageId, 10);
  const message = await db.getMessageById(index);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { title: "Message Details", message: message });
}

function getNewMessageForm(req, res) {
  res.render("form", { title: "New Message" });
}

async function addNewMessage(req, res) {
  const { username, text } = req.body;
  await db.insertMessage({ username, text });
  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessageById,
  getNewMessageForm,
  addNewMessage,
};
