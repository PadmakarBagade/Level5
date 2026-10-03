// const http = require("http");
import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <h1>Hello from AWS EC2! 🚀</h1>
    <p>My Node.js application is running inside Docker.</p>
    <br>
    <p>This is a simple Node.js server running on port 3000.</p>
    <p>It's being served by a Docker container.</p>
  `);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
