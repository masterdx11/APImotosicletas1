import Repair from "./repairs.model.js";

export class RepairService{

    static async findOne(id){
        return await Repair.findOne({
            where:{
                id,
                status:'pending'

            }
        })

    }

    static async findAll(){
        return await Repair.findAll({
            where:{
                status:'pending'

            }
        })
        
        
    }

    static async create(data){
        return await Repair.create(data)
        
    }

    static async update(repair){
        return await repair.update({
            status:'complete'
        })
        
    }
    
    static async delete(repair){
        return await repair.update({status:'cancelled'})

        
    }
}