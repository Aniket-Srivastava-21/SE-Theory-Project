import express from "express";
import { getCourseDetails, enrollSuccess, generatePDF} from "../controllers/course.js";
import { verifyJwt } from "../middleware/validateUser.js";
const router = express.Router();


// http://localhost:5000/courses/
router.get("/getCourseDetails", verifyJwt, getCourseDetails);
router.post("/enrollSuccess", verifyJwt, enrollSuccess);
router.post("/generatePDF", verifyJwt, generatePDF);

export default router;