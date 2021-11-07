import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import ejs from "ejs";
import fileUpload from "express-fileupload";

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

app.get("/",(req,res)=>{
    res.send('Working!!');
});


app.use("*", (req,res) =>{
    return res.status(404).json({error: "not found"});
});