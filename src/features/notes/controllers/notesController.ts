import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import NotesRepository from '../../../Core/database/repositories/NotesRepository';

export default class NotesController {
   async list(req: Request, res: Response) {
      try {
         const rep = new NotesRepository();
         const id = req.params.id;
         let result = await rep.list(id);

         res.status(201).send({ ok: true, data: result });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }

   create(req: Request, res: Response) {
      try {
         const id = req.params.id;
         const { detail, description, note_numb } = req.body;
         const rep = new NotesRepository();
         rep.create({
            uid: randomUUID(),
            note_numb: parseInt(note_numb),
            description: description as string,
            detail: detail as string,
            user_uid: id as string,
         });
         res.status(200).send({ ok: true, msg: 'nota criada' });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }

   update(req: Request, res: Response) {
      try {
         const uid = req.params.id;
         const { detail, description } = req.body;
         const rep = new NotesRepository();
         rep.update(uid, detail, description);
         res.status(200).send({ ok: true, msg: 'nota alterada' });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }

   delete(req: Request, res: Response) {
      try {
         const uid = req.params.id;
         const rep = new NotesRepository();
         rep.delete(uid);
         res.status(200).send({ ok: true, msg: 'nota deletada' });
      } catch (error) {
         res.status(500).send({ ok: false, error });
      }
   }
}
