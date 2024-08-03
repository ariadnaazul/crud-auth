import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev')); //le indica a app que utilice el módulo morgan con su configuración dev -> muestra mensajes cortos por consola con las peticiones del backend

app.use(express.json()); //Para que express pueda leer formato JSON

app.use(cookieParser()); //Convertir cookies a objetos json

app.use("/api", authRoutes); //Las rutas utilizan el prefijo /api

export default app;


