const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  fs.appendFile("text.txt", "Texto que vai aparecer no arquivo de texto", (err) => {
    if (err) throw err 
    console.log('Arquivo Criado!');
  });
});

server.listen(port || 3000, () => console.log("Server rodando..."));