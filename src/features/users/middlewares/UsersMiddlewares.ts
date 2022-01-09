import { NextFunction, Request, Response } from 'express';
import UsersRepository from '../../../Core/database/repositories/UsersRepository';

export default class UsersMiddlewares {
   static async thereIs(req: Request, res: Response, next: NextFunction) {
      let { name } = req.body;
      let userRepo = new UsersRepository();
      let users = await userRepo.list();
      for (let user of users) {
         if (user.name == name) {
            return res.status(500).send({ ok: false, msg: 'usuario ja existe' });
         }
      }
      return next();
   }

   static async logValidation(req: Request, res: Response, next: NextFunction) {
      let { name, password } = req.body;
      let userRepo = new UsersRepository();
      let users = await userRepo.list();
      for (let user of users) {
         if (user.name == name && user.password == password) {
            return next();
         }
      }
      return res.status(500).send({ ok: false, msg: 'falha de login, usuario e senha nao conferem' });
   }
}
