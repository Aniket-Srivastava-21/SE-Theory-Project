// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function PaymentOption(props) {
   const location = useLocation();
  let src = "/" + props.goto;
  return (
    <div className="row mx-3">
      <Link
        to={{
          pathname: src,
          state : { user : location.state.user, course : location.state.course }
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center border border-dark  bg-info  rounded"
          style={{ width: "18rem", height: "18rem" }}
        >
          <p className="text-center text-white fw-bold">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default PaymentOption;