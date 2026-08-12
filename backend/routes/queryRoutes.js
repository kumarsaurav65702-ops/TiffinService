import express from "express";
import {
  submitQuery,
  getQueries,
  updateQueryStatus,
} from "../controllers/queryController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public - Customer can submit query
router.post("/", submitQuery);

// Protected - Only Admin can view queries
router.get("/", authMiddleware, getQueries);

//Admin - Update query status
router.put("/:id", authMiddleware, updateQueryStatus)

export default router;