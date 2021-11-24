import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import fileUpload from "express-fileupload";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import courseRoutes from "./routes/courses.js"
import studentRoute from "./routes/studentRouter.js"
import mentorRoute from "./routes/mentorRoute.js";
import examRoute from "./routes/exam.js"

dotenv.config();
const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
    })
);
//app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        key: "user",
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(fileUpload());


mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
).then(console.log('Database connected')).catch((err)=>console.log(err));

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server listening at port 5000');
})


app.use("/", authRoutes);
app.use("/profile", profileRoutes);
app.use("/courses", courseRoutes);
app.use("/mentor", studentRoute);
app.use("/exam", examRoute);
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);

app.get("/",(req,res)=>{
    res.send('Working!!');
});


app.use("*", (req,res) =>{
    return res.status(404).json({error: "not found"});
});
