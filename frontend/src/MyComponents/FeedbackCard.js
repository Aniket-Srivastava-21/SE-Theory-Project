import React from "react";

function FeedbackCard(props) {

    return (
        <div className="col-5 shadow p-3 mb-5 bg-body rounded my-2 " >
            <p>Rating:{props.feedback.rate}</p>
            <q className="fs-5">{props.feedback.feedback}.</q>
            <p className="my-1">
                <span> <i className="bi bi-person-circle"></i> {props.feedback.user}</span>
            </p>
        </div>
    )
}

export default FeedbackCard