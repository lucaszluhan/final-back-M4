import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import DatabaseConnection from './Core/database/connections/connections';
import { initServer } from './Core/presentations/server';
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

DatabaseConnection.initConnection()
   .then(() => {
      initServer();
   })
   .catch((error) => {
      console.log(error);
   });
