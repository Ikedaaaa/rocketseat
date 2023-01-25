//Trabalhando com bdd, node tem mysql2, queries nativas. Knex - querybuilder. Prisma (ORM) 

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './lib/routes';

const app = Fastify();

app.register(cors); // configurar 'origin' para botar em produção
app.register(appRoutes);

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running!')
})