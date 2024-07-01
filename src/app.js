import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev')) //le indica a app que utilice el módulo morgan con su configuración dev -> muestra mensajes cortos por consola con las peticiones del backend

export default app;


