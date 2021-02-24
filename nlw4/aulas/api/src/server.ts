import express, { response } from 'express';

const app = express();

/**
 * 1º Parâmetro: Rota (Recurso da API);
 * 2º Parâmetro: request, response
 */

//http://localhost:3333/users
app.get('/users', (request, response) => {
    //return response.send("Vai se fuder")
    return response.json({message: "Pau no seu cu"})
})

app.post('/', (request, response) => {
    return response.json({message: "Dado salvo, vadia"})
})

app.listen(3333, () => console.log("Chupa meu pau!"));

/*
GET => Buscar
POST => Salvar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica
*/