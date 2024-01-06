import  express  from "express";
import { router as usersRoute} from "../modules/users/users.route.js";
import { router as repairsRaute } from "../modules/repairs/repairs.route.js";

 //enrutamiento principal (router) agrupa las rutas específicas para usuarios y
//  reparaciones utilizando Express.js. Cuando se importa este módulo en otro lugar de la aplicación y se monta en una ruta específica,


export const router = express.Router();

router.use('/repairs' , repairsRaute)

router.use('/users',usersRoute)




