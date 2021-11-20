import React from "react";
import { Link } from "react-router-dom";

function CourseDashboard() {
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
              {/* <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                        </li> */}
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
                      <tr>
                        <th scope="row">1</th>
                        <td>Physics and Measurement</td>
                        <td>4%</td>
                        <td>
                          Physics, technology and society, SI units, Fundamental
                          and derived units. Least count, accuracy and precision
                          of measuring instruments, Errors in measurement,
                          Dimensions of Physical quantities, dimensional
                          analysis and its applications,
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Kinematics</td>
                        <td>3%</td>
                        <td>
                          Frame of reference. Motion in a straight line:
                          Position-time graph, speed and velocity. Uniform and
                          non-uniform motion, average speed and instantaneous
                          velocity Uniformly accelerated motion, velocity-time,
                          position-time graphs, relations for uniformly
                          accelerated motion. Scalars and Vectors, Vector
                          addition and Subtraction, Zero Vector, Scalar and
                          Vector products, Unit Vector, Resolution of a Vector.
                          Relative Velocity, Motion in a plane. Projectile
                          Motion, Uniform Circular Motion.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Laws of Motion</td>
                        <td>3%</td>
                        <td>
                          Force and Inertia, Newton's First Law of motion;
                          Momentum, Newton's Second Law of motion; Impulse;
                          Newton's Third Law of motion. Law of conservation of
                          linear momentum and its applications, Equilibrium of
                          concurrent forces. Static and Kinetic friction, laws
                          of friction, rolling friction. Dynamics of uniform
                          circular motion: Centripetal force and its
                          applications,
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Work, Energy and Power</td>
                        <td>3%</td>
                        <td>
                          Work done by a constant force and a variable force;
                          kinetic and potential energies, work-energy theorem,
                          power. Potential energy of a spring, conservation of
                          mechanical energy, conservative and non-conservative
                          forces; Elastic and inelastic collisions in one and
                          two dimensions.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Rotational Motion</td>
                        <td>3%</td>
                        Centre of mass of a two-particle system, Centre of mass
                        of a rigid body; Basic concepts of rotational motion;
                        moment of a force, torque, angular momentum,
                        conservation of angular momentum and its applications;
                        moment of inertia, radius of gyration. Values of moments
                        of inertia for simple geometrical objects, parallel and
                        perpendicular axes theorems and their applications.
                        Rigid body rotation, equations of rotational motion.{" "}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div>
                  <ul className="list-unstyled">
                    <li className="media">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">1. Kinetic Energy</h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita earum ratione fugiat et, numquam aliquid
                        necessitatibus alias dignissimos impedit iure recusandae
                        corporis consequatur obcaecati nostrum distinctio
                        similique non! Incidunt, recusandae?.
                      </div>
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/SOIO3V7_zTs"
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
                          <i className="bi bi-file-earmark-arrow-down-fill">  Download Material</i>

                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li className="media">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">2. Laws of Motion</h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita earum ratione fugiat et, numquam aliquid
                        necessitatibus alias dignissimos impedit iure recusandae
                        corporis consequatur obcaecati nostrum distinctio
                        similique non! Incidunt, recusandae?.
                      </div>
                      <a
                        href="../../public/Assets/kinetic_Energy.pdf"
                        download
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Download File
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li className="media">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">3. Kinetics</h5>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Expedita earum ratione fugiat et, numquam aliquid
                        necessitatibus alias dignissimos impedit iure recusandae
                        corporis consequatur obcaecati nostrum distinctio
                        similique non! Incidunt, recusandae?.
                      </div>
                      <a
                        href="../../public/Assets/kinetic_Energy.pdf"
                        download
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Download File
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/feedbackform">
            <button type="button" className="btn btn-success">
              Submit Feedback
            </button>
          </Link>
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
