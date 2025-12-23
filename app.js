const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js 🚀");
  } 
  else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "UP" }));
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
