import React from 'react'
import StudentDetails from './StudentDetails';
import StudentCourses from './StudentCourses';
import StudentSchedule from './StudentSchedule';
import StudentReminders from './StudentReminders';


export default function StudentDashboard() {
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
