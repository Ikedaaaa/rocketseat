//HTTP methods / API RESTful
/** GET, POST, PUT, PATCH, DELETE
 * GET: Operação de leitura no back-end, como listagem; 
 * POST: Criar uma entidade ou recurso;
 * PUT: Edita uma entidade praticamente por completo, exemplo: o usuário vai editar vários campos do perfil;
 * PATCH: Editar informação específica, simples ou singular dentro de uma entidade. Exemplo: Opção de receber notificações ou não, vai salvar como sim ou não e só;
 * DELETE: Remover entidade;
 */
//Os métodos são apenas uma convenção do que uma utilidade, pois é possível fazer tudo com apenas um método HTTP
//Por isso, seguindo a padronização, é melhor utilizar os métodos da melhor forma.

//Na comunicação Back-End - Front-End, existem tipos de parâmetros:
/**
 * Query: Vêm com o ponto de interrogação na URL, com parâmetros nomeados. Para enviar dados não sensíveis e quando é necessário persistir o estado da nossa página no momento, como salvar o nº da página, os filtros aplicados, ordenação... Ex: localhost:3333/ads?page=2 
 * Route: Parâmetros da URL não nomeados, "reconhecidos só de olhar para a URL". Ex: localhost:3333/ads/5 - Acessar ad com id 5, ou em caso de um blog: localhost:3333/post/como-criar-uma-api-em-node
 * Body: Envio de várias informações em uma única requisição, geralmente em envio de formulário.
 */

import express, { request } from "express";
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

const app = express();
app.use(express.json());
app.use(cors(/*{
    origin: 'https://rocketseat.com.br'
}*/));

const prisma = new PrismaClient({
    log: ['query']
});

//Método para listar os games
app.get('/games', async(request, response) =>{
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    });
    
    return response.json(games);
});

//Método para criar os anúncios de games
app.post('/games/:id/ads', async(request, response) =>{
    const gameId = request.params.id;
    const body = request.body;

    //zod javascript validation -> pesquisar

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    });

    return response.status(201).json(ad);
});

//Listagem de anúncios por game
app.get('/games/:id/ads', async(request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd)
        }
    }));
});

//Listagem de anúncios por game
app.get('/ads/:id/discord', async(request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    });

    return response.json({
        discord: ad.discord
    });
});

app.listen(3333);



/**
 * localhost:3333/ads
 * app.get('/ads', (request, response) => {
 *  //return response.send('Acessou ads!');
 *  //Resposta em JSON
 *  return response.JSON([
 *      {id: 1, name: 'Anuncio 1'},
 *      {id: 2, name: 'Anuncio 2'},
 *      {id: 3, name: 'Anuncio 3'},
 *  ])
 * })
 * 
 * app.listen(3333);
 */