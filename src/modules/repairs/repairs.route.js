import  express  from "express";
import { createRepair, deleteRepair, findAllReapairs, findOneRepair, updateRepair } from "./repairs.controller.js";


export const router = express.Router();

router
.route('/')
.get(findAllReapairs)
.post(createRepair)

router
.route('/:id')
.get(findOneRepair)
.patch(updateRepair)
.delete(deleteRepair)

// router.post("/categories", categoryCreate);
// router.delete("/categories", categoryDelete);