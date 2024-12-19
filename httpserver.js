const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let url = req.url;
  console.log(url);
  if (url == "/") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (url === "/about") {
    res.end("<h1>about me</h1>");
  } else if (url == "/contact") {
    res.end("<h1>contact me</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>not found</h1>");
  }
  //   res.setHeader("Content-type", "text/html");
});

server.listen(port, () => console.log(`server is listening on ${port}`));
