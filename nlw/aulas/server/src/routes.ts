import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {

    return response.json({message:'as'});
});

export default routes;