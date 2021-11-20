import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    exam : String,
    subject : String,
    mentor : String,
    desc : String,
    coursePlan : String,
    studentList : Array,
    Fees : Number,
    slots : {
        type: Number,
        default : 5,
    }
    //no.of.hrs
});



const Course = mongoose.model('Course', courseSchema);
export default Course;