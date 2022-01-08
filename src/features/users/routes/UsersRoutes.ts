import { Router } from 'express';
import UsersController from '../controllers/UsersController';

export default class UsersRoutes {
   static initRoutes(): Router {
      let router = Router();
      let controller = new UsersController();
      router.get('/', controller.list);
      router.post('/', controller.create);
      return router;
   }
}
