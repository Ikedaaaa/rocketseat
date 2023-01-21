//Trabalhando com bdd, node tem mysql2, queries nativas. Knex - querybuilder. Prisma (ORM) 

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors); // configurar 'origin' para botar em produção

app.get('/hello', async () => {
    /*const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    });*/
    const habits = await prisma.habit.findMany();
    return habits;
});

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server Running!')
})