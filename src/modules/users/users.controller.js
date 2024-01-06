import { UserService } from "./users.service.js"

const userService = new UserService 
//controladores para operaciones CRUD en la entidad de usuario. Los controladores utilizan la 
//clase UserService del archivo users.service.js para interactuar con la base de datos.

export const findAllUsers = async(req,res) =>{
    try {
        const users =await userService.findAll()

        return res.status(200).json(users)
        
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!'
        })
        
    }
}
export const createUsers = async(req,res) =>{
    try {
        const {name,email,password,role}= req.body
        const user = await userService.create({name,email,password,role})
        return res.status(201).json(user)

        
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!'
        })
        
    }
}
export const findOneUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await userService.findOne(id)
        if (!user) {
            return res.status(404).json({
                status:'error',
                message:'user not found'
            })
            
        }
        
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!🎉'
        })
        
    }
}
export const updateUser = async(req,res) =>{
    try {
        const {id} = req.params;
        const {name,email} = await userService.findOne(id)
        if (!user) {
            return res.status(404).json({
                status:'error',
                message:'user not found'
            })
            
        }
        await userService.delete(user)
        return res.status(204).json(null)
        
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!🎅'
        })
        
    }
}
export const deleteUser  = async(req,res) =>{
    try {
        const {id} = req.params;
        const user = await userService.findOne(id)
        if (!user) {
            return res.status(404).json({
                status:'error',
                message:'user not found'
            })
            
        }
        
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!'
        })
        
    }
}

