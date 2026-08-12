import express from "express";
import { loginAdmin } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginAdmin)
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        admin: req.admin,
    })
})

export default router;