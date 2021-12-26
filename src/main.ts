import express from 'express';
import cors from 'cors';

import { createConnection } from './database/connections';

const app = express();
app.use(express.json());
app.use(cors());

createConnection()
   .then(() => {
      app.listen(8081, () => console.log('Server is running...'));
   })
   .catch((error) => {
      console.log(error);
   });
