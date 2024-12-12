import express from "express";
import { AdminLogin } from "../Controller/admin.controller.js";


const router = express.Router();

// Admin login route
router.post("/admin/login",AdminLogin );

export default router;
