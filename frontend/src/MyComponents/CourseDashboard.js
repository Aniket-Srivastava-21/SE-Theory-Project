import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import baseUrl from "../services/Baseurl";
import Axios from "axios";

function CourseDashboard() {
  // accept the data passed from the link
  let location = useLocation();
  let [curriculum, setCurriculum] = useState([]);
  let [resources, setResources] = useState([]);
  let [filledFeedback, setFilledFeedback] = useState(false);
  let [feedback, setFeedback] = useState("");
  let [rating, setRating] = useState(0);
  let [exam2, setExam2] = useState({});
  let [isValidDate, setDate] = useState(false);

  useEffect(() => {
    console.log(location.state);
    getDetails();
    getExamDetails();
  }, []);

  function getExamDetails(){
    let url = baseUrl + "exam/getExamDetail?exam="+ location.state.course.exam;
    Axios.get(url, {
      headers : {
        "x-access-token" : localStorage.getItem('token')
      }
    }).then((res)=>{
      console.log(res);
      setExam2(res.data.result);
      var dateFrom = res.data.result.startDate;
      var dateTo = res.data.result.endDate;
      var today = new Date();
      var dateCheck = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      var d1 = dateFrom.split("-");
      var d2 = dateTo.split("-");
      var c = dateCheck.split("-");

      var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
      var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
      var check = new Date(c[2], parseInt(c[1])-1, c[0]);
      setDate(check >= from && check <= to)
    })
  }

  function getDetails() {
    
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

  const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  function viewPlan(){
      let fileUrl = `data:application/pdf;base64,${location.state.course.coursePlan[0].data}`;
      // const file = new Blob([fileUrl], { type: "application/pdf" });
      // const fileURL = URL.createObjectURL(file);
      // window.open(fileURL);
      const blob = b64toBlob(location.state.course.coursePlan[0].data, 'application/pdf');
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl);
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
            <div className="my-1">
              <strong>Course Plan: </strong>
               <button onClick={viewPlan} className="btn btn-dark">Download</button>
            </div>
          </div>
          <div className="d-flex justify-content-between ">
            <div>
              {" "}
              <i className="bi bi-calendar"></i> <strong>Start Date: </strong>{ exam2.startDate }
              
            </div>
            <div>
              {" "}
              <i className="bi bi-calendar"></i> <strong>End Date: </strong>
              { exam2.endDate }
            </div>
          </div>

          {/* { isValidDate ? ():() } */}

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
            { isValidDate ?  
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
                                  {/* <a
                                    href="../../public/Assets/kinetic_Energy.pdf"
                                    download
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    <i className="bi bi-file-earmark-arrow-down-fill">
                                      {" "}
                                      Download Material
                                    </i>
                                  </a> */}
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
            : <h3> Course is hidden!! </h3>}
          </div>
          {
            isValidDate ? (filledFeedback == true ? (
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
            ) ) : (<></>)
            
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
