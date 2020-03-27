const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();                   // Criando aplicação

app.use(cors());
const routes = require('./routes');
app.use(express.json());                  //Antes da requisição, converter o json em um obj js
app.use(routes);
app.use(errors());

module.exports = app                       // Quando mandar rodar localhost, localhost:3333
