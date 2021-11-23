import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import { setTimeTable } from "../controllers/mentor.js";
const router = express.Router();

router.get("/timetable", verifyJwt);
router.post("/timetable", verifyJwt, setTimeTable);

export default router;