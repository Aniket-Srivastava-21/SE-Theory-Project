import express from "express";
import { verifyJwt } from "../middleware/validateUser.js";
<<<<<<< HEAD
import {addFeedback} from "../controllers/student.js";
const router = express.Router();

router.post("/addfeedback", verifyJwt, addFeedback);
// router.get("/getfeedback",verifyJwt,getFeedback);
=======
import {addFeedback, getFeedback} from "../controllers/student.js";
const router = express.Router();

router.post("/addfeedback", verifyJwt, addFeedback);
router.get("/getfeedback",verifyJwt,getFeedback);
>>>>>>> 759d96c30559518303cc4f5d5a142d5d3a815cc5

export default router;