import { Application, Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import router from './app/routes';
const app: Application = express();

//parser
app.use(express.json());
app.use('/api/v1',router)
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  const a = 1;

  res.send(a);
});

export default app;
