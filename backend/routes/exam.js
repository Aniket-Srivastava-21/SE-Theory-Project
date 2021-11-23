import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import {addExam, getExams } from "../controllers/exam.js";
const router = express.Router();

router.post("/addexam", verifyJwt, addExam);
router.get("/getExams", verifyJwt, getExams);


export default router;