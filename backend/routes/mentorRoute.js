import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import {addResouces,addTopics, getCourseDetails, setTimeTable, getTimeTable} from "../controllers/mentor.js";
const router = express.Router();

router.post("/addResources", verifyJwt, addResouces);
router.post("/AddTopics",verifyJwt,addTopics);
router.get("/courseDetails",verifyJwt, getCourseDetails);
router.post("/gettimetable", getTimeTable);
router.post("/timetable", verifyJwt, setTimeTable);

export default router;