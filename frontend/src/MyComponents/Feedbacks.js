import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FeedbackCard from "./FeedbackCard";

function Feedbacks() {
    let location=useLocation()
    let [feedbacks,setFeedbacks]=useState([]);

    useEffect(()=>{
        getFeedbacks()
    },[])

    function getFeedbacks(){
        console.log("in the feedback component",location.state)
        setFeedbacks(location.state.feedbacks)
    }
    return (
        <div>
            <p className="bg-danger p-2 mb-2 text-center text-white fs-2">Feedbacks</p>
            {
              <div className="d-md-flex  justify-content-evenly flex-wrap align-items-center ">
                    { 
                    feedbacks.map(function (feedback) {
                        return (
                            <FeedbackCard feedback={feedback}/>
                        )
                      })
                    }
             </div>
            }
        </div>
    )
}

export default Feedbacks;