import express from "express";
import { getCourseDetails, enrollSuccess, generatePDF, getStudentDetails, addCourse} from "../controllers/course.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();


// http://localhost:5000/courses/
router.get("/getCourseDetails", verifyJwt, getCourseDetails);
router.get("/getStudentDetails", verifyJwt, getStudentDetails);
router.post("/enrollSuccess", verifyJwt, enrollSuccess);
router.post("/generatePDF", verifyJwt, generatePDF);
router.post("/addCourse", verifyJwt, addCourse);

export default router;