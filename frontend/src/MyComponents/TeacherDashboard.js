import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../services/Baseurl";
import FeedbackCard from "./FeedbackCard";

function TeacherDashboard() {
  let [title, setTitle] = useState("");
  let [resource, setResource] = useState("");
  let [reference, setReference] = useState("");
  let [unit, setUnit] = useState("");
  let [weightes, setWeightes] = useState("");
  let [topics, setTopics] = useState("");
  let [feedbacks, setFeedbacks] = useState([]);
  let [course, setCourse] = useState({});

  useEffect(() => {
    getCourseDetails();
  }, []);

  function getCourseDetails() {
    let url = baseUrl + "mentor/courseDetails?id=" + "6197387d3e1769db49617b05";
    axios
      .get(url, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("response is:", res.data.result);
        if (res.data.auth) {
          setCourse(res.data.result);
          setFeedbacks(res.data.result.Feedback);
          // console.log("feedbacks are: ",feedbacks)
        } else console.error(res.data.msg);
      });
  }


  // file upload remaining
  function AddResource(e) {
    e.preventDefault();
    // req body
    let req = {
      id: "6197387d3e1769db49617b05",
      topic: title,
      discription: resource,
      reference: reference,
    };
    console.log(req);

    // post request to the server
    let url = baseUrl + "mentor/AddResources";
    axios
      .post(url, req, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        console.log("Resources added");
      })
      .catch((err) => console.error(err));
    //   clear the title and resource and reference values
    setTitle("");
    setReference("");
    setResource("");
  }

  // function addTopics
  function addTopics(e) {
    e.preventDefault();
    // req body
    let req = {
      id: "6197387d3e1769db49617b05",
      unit: unit,
      weightes: weightes,
      topics: topics,
    };
    console.log(req);

    // post request to the server
    let url = baseUrl + "mentor/AddTopics";
    axios
      .post(url, req, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        console.log("Topics added");
      })
      .catch((err) => console.error(err));

    //   clear the title and resource and reference values
    setUnit("");
    setWeightes("");
    setTopics("");
  }

  return (
    <div className="">
      <h3 className="text-center text-white my-2 font-monospace shadow-none p-3 bg-danger ">
        Teacher Dashboard
      </h3>
      <div className="row m-5 border d-sm-flex flex-wrap justify-content-between bg-light border-dark p-3">
        <div className="col-9 bg-white p-3 shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex flex-column justify-content-between py-2">
            <div>
              {" "}
              <strong>Course Name: </strong>JEE Physics
            </div>
            <div>
              <span>About: </span>{" "}
              <span className="text-primary">
                This course covers all the topics of the jee exam in depth.
              </span>
            </div>
            <div className="my-1">
              {" "}
              <i className="bi bi-person-fill"></i>
              <strong>Teacher: </strong> Sam Curran
            </div>
          </div>
          <div className="d-flex justify-content-between ">
            <div>
              {" "}
              <i className="bi bi-calendar"></i> <strong>Start Date: </strong>{" "}
              20/10/2021
            </div>
            <div>
              {" "}
              <i className="bi bi-calendar"></i> <strong>End Date: </strong>
              20/10/2022
            </div>
          </div>

          <div className="my-2">
            <ul
              className="nav nav-pills mb-3 bg-dark p-2"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Add Topics
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Add Resources
                </button>
              </li>
            </ul>

            <div className="tab-content p-2" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div>
                  <form
                    className="shadow-none p-3 mb-5 bg-light rounded"
                    onSubmit={addTopics}
                  >
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Rotational Motion"
                        value={unit}
                        onChange={(e) => {
                          setUnit(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">Weightes</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="4%"
                        value={weightes}
                        onChange={(e) => {
                          setWeightes(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Topics</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="6"
                          placeholder="Centre of mass of a two-particle system, Centre of mass of a rigid body; Basic concepts of rotational motion; moment of a force, torque, angular momentum, conservation of angular momentum and its applications; moment of inertia, radius of gyration. Values of moments of inertia for simple geometrical objects, parallel and perpendicular axes theorems and their applications. Rigid body rotation, equations of rotational motion."
                          value={topics}
                          onChange={(e) => {
                            setTopics(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-dark my-2 px-5">
                      Add
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <form
                  className="shadow-none p-3 mb-5 bg-light rounded"
                  onSubmit={AddResource}
                >
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Laws of Motion"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">
                      About the resource
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="This Resource cover the laws of motion in detail"
                      rows="3"
                      value={resource}
                      onChange={(e) => {
                        setResource(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">
                      add resource link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="http://youtube/embed/23d3def"
                      value={reference}
                      onChange={(e) => {
                        setReference(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    {/* form for the file uploading (remaining)
                                  <form>
                                      <div className="form-group">
                                          <label for="exampleFormControlFile1">Upload files:</label>
                                          <br />
                                          <input type="file" className="form-control-file border border-secondary p-1" id="exampleFormControlFile1" />
                                      </div>
                                  </form> 
                                  */}
                    <button type="submit" className="btn btn-dark my-2 px-5">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <Link
              to={{ pathname: "/feedbacks", state: { feedbacks: feedbacks } }}
            >
              <button className="btn btn-success link-primary text-white text-right my-2">
                View All Feedbacks
              </button>
            </Link>
          </div>
        </div>
        <div className="col-3">
          <div
            className="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem;" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-megaphone-fill"></i> Anouncement
              </h5>
              <hr />
              <p className="card-text">no announcement</p>
            </div>
          </div>
          <div
            className="card my-3 shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem;" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <i className="bi bi-calendar-event-fill"></i> Upcoming
              </h5>
              <hr />
              <p className="card-text">no events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherDashboard;
