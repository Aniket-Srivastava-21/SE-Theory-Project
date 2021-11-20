import React from "react";

function FeedbackCard() {
    return (
        <div className="d-sm-flex  justify-content-evenly flex-fill flex-wrap align-items-center my-2 ">
        <div className="col-5 border border-dark  shadow-none p-3 bg-light rounded" >
            <q className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi officiis quas earum ipsam quis, illum vero impedit eos veniam aut provident consequatur totam id placeat cumque accusantium maiores excepturi.</q>
            <p className="my-1">
                <span> <i className="bi bi-person-circle"></i> Vikas Singh</span>
            </p>
        </div>
       </div>

    )
}

export default FeedbackCard