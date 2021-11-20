import Course from "../model/courses.js";

export let addResources = async (req, res) => {
  try {
    console.log("req is: ", req);

    // add the feedback
    Course.findById({ _id: req.body.id }, (err, course) => {
      if (err) {
        console.error(err);
        res.send("couldn't inser the data ")
      } else {
        let newFeedback = {
          user: req.body.username,
          rate: req.body.rating,
          feedback: req.body.feedback,
        };
        course.Feedback.push(newFeedback);
        course.save(function (err, result) {
          if (err) throw err;
          else console.log(result);
        //   send response
        res.send("succefully inserted");
        });
      }
    });

    // send the response
  } catch (error) {
    console.log(error);
  }
};

// get feedback

export let getFeedback = async (req, res) => {
    try {
        let subject = req.query.sub;
        let exam = req.query.exam;
        Course.findOne({course}, (err,course)=>{
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
