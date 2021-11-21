import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import baseUrl from "../services/Baseurl";

function MentorFeedback() {
  const [rating, setrating] = useState("");
  let history = useHistory();
  const [feedback, setfeedback] = useState("");
  let location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, []);


  // handle submit form
  function handleSubmit(e) {
    // prevent the default action
    e.preventDefault();
    let req = {
      username: localStorage.getItem("name"),
      rating: rating,
      feedback: feedback,
      id:location.state.course._id
    };
    console.log(req);

    // post request to the server
    let url = baseUrl + "mentor/addfeedback";
    axios
      .post(url, req, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        console.log("feedback added");
        history.push("/");
      })
      .catch((err) => console.error(err));

    //   clear the rating and feedback valur
    setrating("");
    setfeedback("");
  }

  // handle Change
  function handleratingChange(e) {
    setrating(e.target.value);
  }

  //   function to change the feedback
  function handlefeedbackChange(e) {
    setfeedback(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5 ">
        <div className="fs-4 text-center pb-3">Teacher Feedback Form</div>
        {/* {
                    if(status)
                {
                    return (

                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Hurrey!!</strong> You should successfully submitted the feedback form.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                )
                }
                } */}
        <div className="row border border-dark p-3 rounded">
          <div className="form-group mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Rate the Teacher
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput"
              placeHolder="5"
              min={0}
              max={10}
              value={rating}
              onChange={handleratingChange}
            />
          </div>
          <div classNames="mb-3">
            <div className="form-group">
              <label for="exampleInputPassword1">feedback</label>
              <textarea
                className="form-control"
                placeHolder="Your Feedback "
                id="floatingTextarea2"
                style={{ height: "300px" }}
                value={feedback}
                onChange={handlefeedbackChange}
              ></textarea>
            </div>
          </div>
          <div>
            {/* <Link to="/discuss"> */}
            <button type="submit" className="btn btn-success my-3">
              Submit Feedback
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default MentorFeedback;
