import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Axios from "axios";
import baseUrl from "../services/Baseurl";

function PaymentSuccess() {

  let [firstTime, setFirstTime] = useState(true);
  const location = useLocation();
  let history = useHistory();
  let [orderID, setOrderID] = useState("");
  useEffect(() => {
    if (firstTime) {
      setFirstTime(false)
      orderSuccess();
    }
  }, []);
  function orderSuccess() {
    
    let url = baseUrl + "courses/enrollSuccess";
    Axios.post(url, {
      course : location.state.course,
      user : location.state.user
    }, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      }
    })
      .then((res) => {
        console.log(res);
        setOrderID(res.data.result._id);
      })
  }
  async function generatePDF() {
    let url = baseUrl + "courses/generatePDF"
    await Axios.post(url, {
      user : location.state.user,
      course : location.state.course,
      transID : orderID,
      method: location.state.method,
    }, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      }
    })
      .then((res) => {
        history.push("/");            
        console.log(res);
      })
  }
 


  let mystyle = {
    "max-width": "50rem",
  };

  return (
    <div className="min-height my-5">
      <div class="card border-dark mx-auto my-5" style={mystyle}>
        <div class="card-header fs-2 text-success text-center">
          Payment Successful <i class="bi bi-check-circle"></i>
        </div>
        <div class="col p-3 mt-5">
        <div className="d-flex justify-content-between">
            <p className="text">Exam Choosen</p>
            <p className="text">{location.state.course.exam}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text">Course</p>
            <p className="text">{location.state.course.subject}</p>
          </div>
          
          <div className="d-flex justify-content-between">
            <p className="text fw-bold">Fees</p>
            <p className="text fw-bold">{location.state.course.Fees}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text">Payment Type</p>
            <p className="text">{location.state.method}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text">Transaction ID</p>
            <p className="text">{orderID}</p>
          </div>
        </div>
        <div class="col p-3 mt-5">
          <div className="d-flex justify-content-center">

            <Link
              className="fs-6 bg-primary text-white px-5 py-2 rounded-pill text-decoration-none"
              onClick={generatePDF}
              to="/"
            >
              Generate Invoice{" "}
              <i class="bi bi-file-earmark-arrow-down-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;