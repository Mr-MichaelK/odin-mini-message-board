const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

exports.getMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

exports.getMessageById = (req, res) => {
  const index = req.params.messageId;
  const message = messages[index];
  res.render("message", { title: "Message Details", message: message });
};

exports.getNewMessageForm = (req, res) => {
  res.render("form", { title: "New Message" });
};

exports.addNewMessage = (req, res) => {
  const { text, user } = req.body;
  const added = new Date();
  messages.push({ text, user, added });
  res.redirect("/");
};
