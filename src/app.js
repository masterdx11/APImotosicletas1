import express from 'express';
import { router } from './routes/index.js';

//  importa y utiliza rutas modulares, y exporta la aplicación Express para su uso en otros archivos

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

//Rutas
app.use('/api/v1',router )

export default app;
