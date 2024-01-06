import 'dotenv/config'
import env from 'env-var';

//Este código configura y carga variables de entorno utilizando el paquete dotenv y env-var.

export const envs ={
    PORT: env.get('PORT').required().asPortNumber(),
    DB_URI:env. get('DB_URI').required().asString(),
    
}