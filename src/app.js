import express from 'express';
import routes from './routes.js';
const app = express();

//Mostrar ao express que os valores sao JSON
app.use(express.json());

//ROTAS
app.use(routes);

export default app;