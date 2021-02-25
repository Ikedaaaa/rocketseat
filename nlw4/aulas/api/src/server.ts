import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Positivo e operante!"));











/**
 * 1º Parâmetro: Rota (Recurso da API);
 * 2º Parâmetro: request, response

/*
GET => Buscar
POST => Salvar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica

//http://localhost:3333/users
app.get('/users', (request, response) => {
    //return response.send("Vai se fuder")
    return response.json({message: "Olá, é o início da NLW"})
})

app.post('/', (request, response) => {
    return response.json({message: "Dados salvos, senhor(a)"})
})
*/

