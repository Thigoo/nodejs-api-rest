import express from 'express';
import routes from './routes.js'

const app = express();

//indicar para o expresse ler body com json
app.use(express.json());

//rotas
app.use(routes);

export default app;
