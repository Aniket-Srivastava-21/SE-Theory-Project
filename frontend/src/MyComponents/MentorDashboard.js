import React from 'react'
import MentorDetails from './MentorDetails';
import MentorCourses from './MentorCourses';
import MentorSchedule from './MentorSchedule';
import { useLocation } from 'react-router-dom';

export default function mentordashboard() {
    
    return (
        <>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-3">
                        <MentorDetails/>
                    </div>
                    <div className="col-9">
                        <MentorCourses />
                        <MentorSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}
