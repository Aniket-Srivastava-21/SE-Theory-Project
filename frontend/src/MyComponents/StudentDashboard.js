import React, { useEffect } from 'react'
import StudentDetails from './StudentDetails';
import StudentCourses from './StudentCourses';
import StudentSchedule from './StudentSchedule';
import StudentReminders from './StudentReminders';
import { useLocation } from 'react-router-dom';


export default function StudentDashboard() {
    let location = useLocation();
    

    return (
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-3">
                        <StudentDetails />
                        <br/>
                        <StudentReminders />
                    </div>
                    <div className="col-9">
                        <StudentCourses />
                        <StudentSchedule />
                    </div>
                </div>
            </div>
    )
}
