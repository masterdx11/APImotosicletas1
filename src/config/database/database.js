import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroments.js";

//Este código configura y establece la conexión con la base de datos utilizando Sequelize

export const sequelize = new Sequelize(envs.DB_URI,{
    logging:false
})

export const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection ok!...😃 ");
    } catch (error) {
        console.log(error)

    }
}

export const syncUP= async () => {
    try {
        await sequelize.sync();
        console.log("Sync ok!...😃 ");
    } catch (error) {
        console.log(error)
        
    }
}   

