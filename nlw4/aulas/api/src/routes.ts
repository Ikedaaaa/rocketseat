import {Router} from 'express';
import { SurveysController } from './controllers/SurveysController';
import {UserController} from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);
// Não incluído na aula, fiz por conta própria
router.get("/users", userController.list);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.list);

export {router};

