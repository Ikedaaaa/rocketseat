import express, { response } from 'express';

const app = express();

/**
 * 1º Parâmetro: Rota (Recurso da API);
 * 2º Parâmetro: request, response
 */

//http://localhost:3333/users
app.get('/users', (request, response) => {
    //return response.send("Vai se fuder")
    return response.json({message: "Olá, é o início da NLW"})
})

app.post('/', (request, response) => {
    return response.json({message: "Dados salvos, senhor(a)"})
})

app.listen(3333, () => console.log("Positivo e operante!"));

/*
GET => Buscar
POST => Salvar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica
*/