const express = require('express');
const cors = require('cors');

const app = express();                   // Criando aplicação

app.use(cors());
const routes = require('./routes');
app.use(express.json());                  //Antes da requisição, converter o json em um obj js
app.use(routes);

app.listen(3333);                       // Quando mandar rodar localhost, localhost:3333
