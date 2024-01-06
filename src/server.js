import app from "./app.js";
import { authenticate, syncUP } from "./config/database/database.js";
import { envs } from "./config/enviroments/enviroments.js";

//realizar una autenticación y una sincronización, 

async function main() {
    
    try{
        await authenticate() // Llama a la función "authenticate" de forma asíncrona y espera su finalización
        await syncUP()


    } catch(error){
        console.error(error);
    }
}

main()

app.listen(envs.PORT,() =>{
    console.log(`Server running on port: ${envs.PORT}`)
})