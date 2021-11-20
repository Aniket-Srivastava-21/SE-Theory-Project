import React from "react"
import { Link } from "react-router-dom"
import FeedbackCard from "./FeedbackCard"

function TeacherDashboard() {
    return (
        <div className="">
            <h3 className="text-center text-white my-2 font-monospace shadow-none p-3 bg-danger ">Teacher Dashboard</h3>
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
                        <ul className="nav nav-pills mb-3 bg-dark p-2" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add Topics</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Add Resources</button>
                            </li>
                        </ul>

                        <div className="tab-content p-2" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div >

                                    <form className="shadow-none p-3 mb-5 bg-light rounded">
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Unit</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rotational Motion" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput1">Weightes</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Topics</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Centre of mass of a two-particle system, Centre of mass of a rigid body; Basic concepts of rotational motion; moment of a force, torque, angular momentum, conservation of angular momentum and its applications; moment of inertia, radius of gyration. Values of moments of inertia for simple geometrical objects, parallel and perpendicular axes theorems and their applications. Rigid body rotation, equations of rotational motion."></textarea>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-dark my-2 px-5">Add</button>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <form className="shadow-none p-3 mb-5 bg-light rounded">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Title</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">About the resource</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">add resource link</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="http://youtube/embed/23d3def" />
                                    </div>
                                    <div className="form-group my-2">

                                        <form>
                                            <div className="form-group">
                                                <label for="exampleFormControlFile1">Upload files:</label>
                                                <br />
                                                <input type="file" className="form-control-file border border-secondary p-1" id="exampleFormControlFile1" />
                                            </div>
                                        </form>
                                        <button type="button" className="btn btn-dark my-2 px-5">Add</button>

                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>


                    <div id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
                        <div className="carousel-inner bg-secondary">
                            <div className="carousel-item active ">
                                <FeedbackCard />
                            </div>
                            <div className="carousel-item">
                                <FeedbackCard />

                            </div>
                            <div className="carousel-item">
                                <FeedbackCard />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div>

                        <Link to="/feedbacks">
                            <p className="link-primary text-right my-2">
                                View All Feedbacks
                            </p>
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
    )

}
export default TeacherDashboard