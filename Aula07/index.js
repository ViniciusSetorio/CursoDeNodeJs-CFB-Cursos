const express = require('express');
const rotas = require('./rotas/rotas')
const port = process.env.PORT || 3000;

const app = express();

app.use('/', rotas);

app.use('*', (req, res) => {
    res.send('Curso de NodeJs');
});
app.listen(port, () => console.log('Server rodando...'));