const express = require("express");
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Pagina principal - Curso de NodeJs');
});

app.get('/canal', (req, res) => {
    res.json({canal:'Pagina canal - Rota Canal'});
});

app.listen(port || 3000, () => {console.log("Server rodando...")});
