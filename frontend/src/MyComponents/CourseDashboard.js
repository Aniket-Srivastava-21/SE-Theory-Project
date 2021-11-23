import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import baseUrl from "../services/Baseurl";

function CourseDashboard() {
  // accept the data passed from the link
  let location = useLocation();
  let [curriculum, setCurriculum] = useState([]);
  let [resources, setResources] = useState([]);
  let [filledFeedback, setFilledFeedback] = useState(false);
  let [feedback, setFeedback] = useState("");
  let [rating, setRating] = useState(0);

  useEffect(() => {
    console.log(location.state);
    getDetails();
  }, []);

  function getDetails() {
    let url = baseUrl + "/";
    setCurriculum(location.state.course.Curriculum);
    setResources(location.state.course.Resources);
    let username = localStorage.getItem("name");
    // username
    console.log(username)

    if (location.state.course.Feedback.length === 0)
      setFilledFeedback(false)
    else {
      location.state.course.Feedback.map(function (data) {
        if (data.user === username) {
          setFilledFeedback(true)
          setFeedback(data.feedback)
          setRating(data.rate)
        }
      })
    }
  }

  return (
    <div className="">
      <h3 className="text-center text-white my-2 font-monospace shadow-none p-3 bg-danger ">
        Course Dashboard
      </h3>
      <div className="row m-5 border d-sm-flex flex-wrap justify-content-between bg-light border-dark p-3">
        <div className="col-9 bg-white p-3 shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex flex-column justify-content-between py-2">
            <div>
              {" "}
              <strong>Course Name: </strong>
              {location.state.course.subject}
            </div>
            <div>
              <span>About: </span>{" "}
              <span className="text-primary">{location.state.course.desc}</span>
            </div>
            <div className="my-1">
              {" "}
              <i className="bi bi-person-fill"></i>
              <strong>Mentor: </strong> {location.state.course.mentor}
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

          <div className=" border border-dark p-2 my-2">
            <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
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
                  Curriculum
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
                  Resources
                </button>
              </li>
            </ul>
            <hr />
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div>
                  {curriculum.length === 0 ? (
                    <div className="text-center my-5">
                      <p className="fs-3">No Curriculum has been added yet!!</p>
                    </div>
                  ) : (
                    <div>
                      <table className="table ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Units</th>
                            <th scope="col">Weightage</th>
                            <th scope="col">topics</th>
                          </tr>

                        </thead>
                        <tbody>
                          {curriculum.map(function (data,i) {
                            return (
                              <tr>
                                <th scope="row">{i+1}.</th>
                                <td>{data.unit}</td>
                                <td>{data.weightes}</td>
                                <td>{data.topics}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div>
                  {
                    resources.length === 0 ? (
                      <div className="text-center my-5">
                        <p className="fs-3">No Resource has been added yet!!</p>
                      </div>
                    ) : (
                      <ul className="list-unstyled">
                        {
                          resources.map(function (data,i) {
                            return (

                              <li className="media">
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1 text-decoration-underline">{i+1}. {data.topic}:</h5>
                                  {data.discription}
                                </div>
                                <iframe
                                  width="100%"
                                  height="600"
                                  src={data.reference}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                                <br />
                                <div>
                                  <a
                                    href="../../public/Assets/kinetic_Energy.pdf"
                                    download
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <i className="bi bi-file-earmark-arrow-down-fill">
                                      {" "}
                                      Download Material
                                    </i>
                                  </a>
                                </div>
                                <hr />
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          {
            filledFeedback == true ? (
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Your Feedback
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p> <b>Rating:</b>  {rating}</p>
                     <b>Feedback:  </b> <q> {feedback} </q>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to={{ pathname: "/feedbackform", state: location.state }}>
                <button type="button" className="btn btn-success">
                  Submit Feedback
                </button>
              </Link>
            )
          }
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
export default CourseDashboard;
