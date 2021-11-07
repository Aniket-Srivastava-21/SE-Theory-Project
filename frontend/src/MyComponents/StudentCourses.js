import React from 'react'
import StudentCourseItem from './StudentCourseItem'

export default function StudentCourses() {
    return (
        <div className="container bg-light rounded border border-dark pt-3">
            <div >
                <h2 className="container row mb-3">My Courses</h2>
                <div className="row">
                    <br />
                    <StudentCourseItem />
                    <StudentCourseItem />
                    <StudentCourseItem />
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}
