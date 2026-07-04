const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
