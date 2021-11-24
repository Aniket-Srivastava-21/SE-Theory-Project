import React from 'react'
import MentorDetails from './MentorDetails';
import MentorCourses from './MentorCourses';
import MentorSchedule from './MentorSchedule';

export default function mentordashboard(props) {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-3"> 
                        <MentorDetails/>
                    </div>
                    <div className="col-9">
                        <MentorCourses />
                        <MentorSchedule exam = {props.exam} />
                    </div>
                </div>
            </div>
        </>
    )
}
