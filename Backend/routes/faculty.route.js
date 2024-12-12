import express from "express";
import {facultyController, getAllFaculty} from "../Controller/faculty.controller.js";



const router = express.Router();

// Admin login route
router.post("/admin/faculty",facultyController );
router.get("/admin/getfaculty",getAllFaculty );

export default router;
