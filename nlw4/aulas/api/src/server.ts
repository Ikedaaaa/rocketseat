import { app } from "./app";

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

/**
 * 1- Testes Unitários: Testam determinada funcionalidade da aplicação - serviço ou função específica;
 * Utilizado geralmente do TDD: Começar a desenvolver o código orientado a testes;
 * Na aplicação, criamos a migration, criamos o model, o repository e o controller,
 * No TDD se inicia pela funcionalidade de criação de usuário, porém sem utilizar dados reais - dados fakes e repositórios fakes;
 * À partir dos testes, desenvolvemos a aplicação - Começamos os testes e vemos se precisa de um serviço ou repositório;
 * Não são feitos testes unitários com banco de dados ou API's externas
 * 
 * 2- Testes de Integraçãos: Funcionalidade completa da aplicação;
 * Caso fomos testar a criação de usuário:
 * -> request -> routes -> controller -> repository
 * <- repository <- controller <- response
 * É testado toda a parte, desde a requeisição, até a resposta
 * 
 * 3- Ponta a ponta (E2E): Testa a ação do usuário em uma aplicação, mais usado em aplicações front-end;
 * Exemplo de cadastro de usuário: 
 * 1º Usuário digitou os dados nos campos do formulário;
 * 2º Usuário clicou em cadastrar
 * 3º Usuário esperou a página ser recarregada, ou algo do tipo.
 */

