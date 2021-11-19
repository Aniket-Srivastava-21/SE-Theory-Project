import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

export default function CreditCard() {
  // get the state data
   const location = useLocation();

  console.log("state contain: ", location.state);

  return (
    <div className="conainer px-5 my-5 min-height">
      <h4 className="text-left lg">Payment</h4>
      <h2 className="text-center fw-bold">Enter Credit Card Details</h2>
      <div className="px-5">
        <div className="row my-3">
          <div className="col">
            <div class="form-group">
              <label for="exampleInputEmail1">Card Holder Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="John Dev"
              />
            </div>
          </div>
          <div className="col ">
            <div class="form-group">
              <label for="exampleInputEmail1">Card Number</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="7824 5935 5892 1981"
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <div class="form-group">
              <label for="exampleInputEmail1">Exp-Month</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="12"
              />
            </div>
          </div>
          <div className="col ">
            <div class="form-group">
              <label for="exampleInputEmail1">Exp-Year</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="2023"
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="d-flex justify-content-center">
            <div class="form-group  w-50 align-center">
              <label for="exampleInputEmail1">CVV</label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="4028"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <Link
          className="fs-6 bg-primary text-dark px-5 py-2 rounded-pill text-decoration-none"
          to="/cart"
        >
          Back to cart
        </Link>
        <Link
          className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none"
          to={{
            pathname: "/paymentsuccess",
            state: { user: location.state.user, course : location.state.course, method : "Credit Card" },
          }}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}