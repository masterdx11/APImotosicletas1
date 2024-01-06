import User from "./users.model.js";

    // que proporciona métodos estáticos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una entidad de usuario

export class UserService{
    static async findOne(id){
        return await User.findOne({
            where:{
                id:id,
                status:'available'
            }
        })

    }

    static async findAll(){
        return await User.findAll({
            where:{
                status:'available'
            }
        })

    }
    static async create(){
        return await User.create(data)

    }

    static async update(){
        return await user.update(data)


    }

    static async delete(user){
        return await User.update({status:'disabled'})
        

    }
}