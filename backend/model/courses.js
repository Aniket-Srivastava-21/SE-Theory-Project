import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  exam: String,
  subject: String,
  mentor: String,
  desc: String,
  coursePlan: String,
  studentList: Array,
  Fees: Number,
  slots: {
    type: Number,
    default: 5,
  },
  // topics
  Curriculum: [
    {
      unit: String,
      weightes: String,
      topics: String,
    },
  ],
  // resource
  Resources: [
    {
      topic: String,
      discription: String,
      reference: String,
      // files remaining
    },
  ],
  Feedback:[
      {
          rate:Number,
          feedback:String,
          user:String
      }
  ]

  //no.of.hrs
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
