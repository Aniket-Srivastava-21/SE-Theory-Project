import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
import {addResources,getFeedback} from "../controllers/student.js";
const router = express.Router();

router.post("/addfeedback", verifyJwt, addResources);
router.get("/getfeedback",verifyJwt,getFeedback);

export default router;