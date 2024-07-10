import { Router } from "express";

//Importamos las funciones desde un contolador para que las rutas se vean más limpias.
import { login, register} from '../controllers/auth.controller.js'; 

const router = Router(); //La ejecusión de Router nos da un objeto nuevo



router.post('/register', register);
router.post('/login', login);


//Necesitamos exportar el enrutador porque las rutas se tienen que aladir a la aplicación de express.
export default router;
