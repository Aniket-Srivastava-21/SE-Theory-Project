import PaymentOption from "./PaymentOption";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Payment() {
 
    let location = useLocation();
    useEffect(()=>{
      console.log(location.state);
    })

    return (
      <div className="m-5">
        <p className="fs-2">Payment</p>
        <p className="mx-5">choose the payment option</p>
        <div className="d-sm-flex justify-content-center flex-wrap my-5">
          
          <PaymentOption title="Debit Card" goto="debitcard" />
          <PaymentOption title="Credit Card" goto="creditcard" />
          <PaymentOption title="Internet Banking" goto="internetbanking" />
          <PaymentOption title="UPI" goto="upi" />
        </div>
        <div className="d-flex justify-content-between">
          <Link
            className="fs-6 bg-primary text-white px-3  py-2 rounded-pill text-decoration-none"
            to="/courses"
          >
            <i class="bi bi-arrow-left"></i>
            Back to Courses
          </Link>

        </div>
      </div>
    );
}

export default Payment;
