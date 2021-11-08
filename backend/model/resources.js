import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
    courseID : String,
    links : Array, // { Link: , desc: , }
    Files : Array, // { File: , desc: , }
    //no.of.hrs
});



const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;