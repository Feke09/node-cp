// server.js
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world !!!</h1>\n i am fekecodes welcome to my servernnode");
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
