const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  const data = fs.readFileSync("index.html");
  res.send(data.toString());
});

app.get("/contact", (req, res) => {
  res.send("contact me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
