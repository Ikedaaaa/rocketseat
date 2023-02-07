//Trabalhando com bdd, node tem mysql2, queries nativas. Knex - querybuilder. Prisma (ORM) 

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './lib/routes';

const app = Fastify();

app.register(cors); // configurar 'origin' para botar em produção
app.register(appRoutes);

//https://stackoverflow.com/questions/38175020/cant-access-localhost-via-ip-address
//https://stackoverflow.com/questions/50064388/how-to-use-a-network-ip-instead-of-localhost-with-nodejs-without-express

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP Server Running!')
})