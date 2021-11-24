import express from "express";
import { getRole, getUserData, getTransactions, viewPDF, viewCourses, viewCoursesMentor } from "../controllers/user.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();


// http://localhost:5000/profile/
router.get("/getRole", verifyJwt, getRole);

router.get("/getUserData", verifyJwt, getUserData);
router.get("/getTransactions", verifyJwt, getTransactions);
router.get("/viewPDF", verifyJwt, viewPDF);
router.get("/viewCourses", verifyJwt, viewCourses);
router.get("/viewCoursesMentor", verifyJwt, viewCoursesMentor);

export default router;