import { Application, Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

//parser
app.use(express.json());
app.use('/api',router)
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  const a = 1;

  res.send(a);
});
//global error handaling === aita sobsomoy niche rakha uchit. tanahole error catch korte parbe nah
app.use(globalErrorHandler)

export default app;
