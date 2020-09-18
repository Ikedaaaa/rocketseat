/**
 * Métodos Http:
 * 
 * GET:     Buscar uma ou mais informações do back-end
 * POST:    Criar novas informações no back-end
 * PUT:     Atualizar uma ou mais informações existentes no back-end
 * DELETE:  Remover uma informação do back-end
 * 
 * POST:    http://localhost:3333/users = Criar um usuário
 * GET:     http://localhost:3333/users = Listar usuários
 * GET:     http://localhost:3333/users/5 = Buscar dados do usuário com Id 5
 * 
 * 
 * Request Param: Parâmetros que vêm na rota que identificam um rescurso
 * Query Param: Parâmetros que vêm na rota, geralmente opcionais, para filtros e paginação
 * Request Body: Parâmetros para criação/atualização de informações
 */

import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);