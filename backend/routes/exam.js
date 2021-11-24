import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import {addExam, getExams, getExamDetail, getTT, checkMentor } from "../controllers/exam.js";
const router = express.Router();

router.post("/addexam", verifyJwt, addExam);
router.get("/getExams", getExams);
router.get("/getExamDetail", verifyJwt, getExamDetail);
router.get("/getTT", verifyJwt, getTT);
router.get("/checkMentor", verifyJwt, checkMentor);


export default router;