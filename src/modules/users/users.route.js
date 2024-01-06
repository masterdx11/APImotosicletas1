import  Express from "express";
import { createUsers, deleteUser, findAllUsers, findOneUser, updateUser } from "./users.controller.js";

//define un enrutador (router) para las operaciones CRUD en la entidad de usuario utilizando

export const router = Express.Router();

router
.route('/')
.get(findAllUsers)
.post(createUsers)

router 
.route('/:id')
.get(findOneUser)
.patch(updateUser)
.delete(deleteUser);