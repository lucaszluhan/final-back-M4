import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import UsersRepository from '../../../Core/database/repositories/UsersRepository';

export default class UsersController {
   async list(req: Request, res: Response) {
      try {
         const rep = new UsersRepository();
         const result = await rep.list();
         res.status(200).send({ ok: true, data: result });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }

   create(req: Request, res: Response) {
      try {
         const { name, password } = req.body;
         const rep = new UsersRepository();
         rep.create({
            uid: randomUUID(),
            name: name as string,
            password: password as string,
            notes_numb: 0,
         });
         res.status(201).send({ ok: true, msg: 'usuario criado' });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }
}
