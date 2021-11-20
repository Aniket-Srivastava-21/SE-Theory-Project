import mongoose from "mongoose";

const timetableSchema = mongoose.Schema({
    exam : String,
    monday : Array, //{ slot:1,courseid : 1234 }
    tuesday : Array,
    wednesday : Array,
    thursday : Array,
    friday : Array,
    //no.of.hrs
});



const TimeTable = mongoose.model('TimeTable', timetableSchema);
export default TimeTable;