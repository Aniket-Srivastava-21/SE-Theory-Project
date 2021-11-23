import Course from "../model/courses.js";

// add resource
export let addResouces = async (req, res) => {
  try {
    console.log("req is: ", req);
    // add the feedback
    Course.findById({ _id: req.body.id }, (err, course) => {
      if (err) {
        console.error(err);
        res.send("couldn't insert the data ");
      } else {
        let newResource = {
          topic: req.body.topic,
          discription: req.body.discription,
          reference: req.body.reference,
        };
        course.Resources.push(newResource);
        course.save(function (err, result) {
          if (err) throw err;
          else console.log(result);
          //   send response
          res.send("succefully inserted");
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// add Topics
export let addTopics = async (req, res) => {
  try {
    console.log("req is: ", req);
    // add the topic
    Course.findById({ _id: req.body.id }, (err, course) => {
      if (err) {
        console.error(err);
        res.send("couldn't insert the data ");
      } else {
        let newTopic = {
          unit: req.body.unit,
          weightes: req.body.weightes,
          topics: req.body.topics,
        };
        course.Curriculum.push(newTopic);
        course.save(function (err, result) {
          if (err) throw err;
          else console.log(result);
          //   send response
          res.send("topic added succefully");
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// get course Details
export let getCourseDetails = async (req, res) => {
  try {
    console.log("res is: ",req)
      Course.findOne({ _id: req.query.id }, (err, course)=>{
          if(err){
              console.log(err);
          }else{
              if(course){
                  return res.status(200).json({auth:true, result : course});
              }else{
                  return res.status(200).json({ auth: false, msg : "No course exist" })
              }
          }
      })  
  } catch (error) {
      console.log(error);        
  }
};