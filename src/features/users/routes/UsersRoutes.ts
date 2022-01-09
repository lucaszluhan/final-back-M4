import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UsersMiddlewares from '../middlewares/UsersMiddlewares';

export default class UsersRoutes {
   static initRoutes(): Router {
      let router = Router();
      let controller = new UsersController();
      router.get('/', controller.list);
      router.post('/login', UsersMiddlewares.logValidation, controller.login);
      router.post('/create', UsersMiddlewares.thereIs, controller.create);
      return router;
   }
}
