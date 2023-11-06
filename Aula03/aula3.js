const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write("<h1> Seja bem vindo! </h1>");
  } else if (req.url == "/canal") {
    res.write("<h1> Seja bem vindo a pagina canal! </h1>");
  } else if (req.url == "/curso") {
    res.write("<h1>Seja bem vindo a pagina curso</h1>");
  } else if (req.url == '/curso/node') {
    res.write('<h1> Seja bem vindo a pagina curso node </h1>')
  }
});

server.listen(port, host, () => {
  console.log("Server está rodando...");
});
