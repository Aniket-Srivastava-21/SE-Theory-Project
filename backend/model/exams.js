import mongoose from "mongoose";

const examSchema = mongoose.Schema({
    name : String,
    desc : String,
    alt : String,
    subjects : Array,
    startDate: String,
    endDate : String,
    //no.of.hrs
});



const Exam = mongoose.model('Exam', examSchema);
export default Exam;