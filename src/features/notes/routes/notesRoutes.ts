import { Router } from 'express';
import NotesController from '../controllers/notesController';

export default class NotesRoutes {
   static initRouter(): Router {
      let router = Router();
      let controller = new NotesController();
      router.get('/:id', controller.list);
      router.post('/:id', controller.create);
      router.put('/:id', controller.update);
      router.delete('/:id', controller.delete);
      return router;
   }
}
