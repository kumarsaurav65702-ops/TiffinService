import express from "express";
import { addFood, getFoods, updateFood, deleteFood } from "../controllers/foodController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";



const router = express.Router()

//Only Admin
router.post("/", authMiddleware, upload.single("image"), addFood)
router.get("/", getFoods);
router.put("/:id", authMiddleware, updateFood)
router.delete("/:id", authMiddleware, deleteFood)



export default router