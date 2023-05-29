import express from "express";
import createcontroller from "../controllers/createcontrollers.js";
const router=express.Router();
router.post("/create/event",createcontroller.addTask);
router.post("/delete/task",createcontroller.deleteTask);
router.post("/update/task",createcontroller.updateTask);
export default router;