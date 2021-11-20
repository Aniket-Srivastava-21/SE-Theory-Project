import React from "react";
import FeedbackCard from "./FeedbackCard";

function Feedbacks() {
    return (
        <div>
            <h2 className="bg-danger p-2 mb-2 text-center text-white">Feedbacks</h2>
            <div className="d-sm-flex  justify-content-evenly flex-fill flex-wrap align-items-center ">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    )
}

export default Feedbacks;