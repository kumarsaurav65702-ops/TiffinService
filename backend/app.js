import express from "express";
import cors from 'cors';
import adminRoutes from "./routes/adminRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
const app = express();

// middlewares
app.use(cors())
app.use(express.json())
app.use("/api/admin", adminRoutes);
app.use("/api/food", foodRoutes)
app.use("/api/query", queryRoutes);

// test route

app.get('/', (req,res) => {
    res.json({
        success: true,
        message: "Tiffin Service API Running"
    })
})

export default app;