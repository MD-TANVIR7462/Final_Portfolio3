import { Router } from "express";
import { myWorkController } from "./myWork.controller";
import { auth } from "../../middleware/auth";

const router=Router()

router.post('/create',auth("Admin"),myWorkController.createMyWork)
router.get('/',myWorkController.getMyWork)
router.get('/:name',myWorkController.getMySpecificWork)
router.delete('/delete/:id',auth("Admin"),myWorkController.deleteMyWork)
router.patch('/update/:id',auth("Admin"),myWorkController.updateMyWork)

export const myWorkRoute=router
