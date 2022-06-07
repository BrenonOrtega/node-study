import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

const port = 5001
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
