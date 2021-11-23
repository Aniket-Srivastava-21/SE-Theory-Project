import TimeTable from "../model/timetable.js";
import Course from "../model/courses.js";

export let setTimeTable = async (req, res) => {
    // console.log("hello5");
    try {
        console.log(req.body);
        TimeTable.findOne({exam: req.body.exam}).then((timetable) => {
            console.log("hello1");
            // console.log(timetable);
            if(timetable) {
                if(req.body.monday !== undefined)
                    for(const value of req.body.monday) {
                        timetable.monday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.tuesday !== undefined)
                    for(const value of req.body.tuesday) {
                        timetable.tuesday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.wednesday !== undefined)
                    for(const value of req.body.wednesday) {
                        timetable.wednesday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.thursday !== undefined)
                    for(const value of req.body.thursday) {
                        timetable.thursday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.friday !== undefined)
                    for(const value of req.body.friday) {
                        timetable.friday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                timetable.save((err, result) => {
                    if (err) throw err;
                    else console.log(result);
                //   send response
                    res.send("succesfully inserted");
                });
            }
            else {
                var timetable = new TimeTable();
                console.log("hello");
                // console.log(timetable);
                // console.log(req.body.wednesday);
                timetable.exam = req.body.exam;

                if(req.body.monday !== undefined)
                    for(const value of req.body.monday) {
                        timetable.monday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.tuesday !== undefined)
                    for(const value of req.body.tuesday) {
                        timetable.tuesday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.wednesday !== undefined)
                    for(const value of req.body.wednesday) {
                        timetable.wednesday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.thursday !== undefined)
                    for(const value of req.body.thursday) {
                        timetable.thursday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                if(req.body.friday !== undefined)
                    for(const value of req.body.friday) {
                        timetable.friday.push({slot: value, course: req.body.course, mentor: req.body.mentor})
                    }
                timetable.save((err, result) => {
                    if (err) throw err;
                    else console.log(result);
                //   send response
                    res.send("successfully inserted");
                });
            }
        })
    }
    catch(error) {
        console.log(error);
    }
}

export let getTimeTable = async (req, res) => {
    try {
        console.log(req.body);
        TimeTable.findOne({exam: req.body.exam}).then((timetable) => {
            console.log("hello1");
            // console.log(timetable);
            if(timetable) {
                res.status(200).json({auth: "true", result: timetable});
            }
            else {
                res.status(201).send("timetable does not exist!");
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}

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
