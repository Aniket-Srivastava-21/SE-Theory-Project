import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import {addFeedback} from "../controllers/student.js";
const router = express.Router();

router.post("/addfeedback", verifyJwt, addFeedback);
// router.get("/getfeedback",verifyJwt,getFeedback);

export default router;