import express from 'express';
import NotesRoutes from '../../features/notes/routes/notesRoutes';
import UsersRoutes from '../../features/users/routes/UsersRoutes';

export const makeRoutes = (app: express.Application) => {
   app.use('/users', UsersRoutes.initRoutes());
   app.use('/notes', NotesRoutes.initRouter());
};
