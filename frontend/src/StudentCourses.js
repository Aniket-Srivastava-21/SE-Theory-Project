import React from 'react'
import StudentCourseItem from './StudentCourseItem'

export default function StudentCourses() {
    return (
        <div className="container rounded bg-dark pt-3">
            <div >
                <h2 className="container row text-white mb-3">My Courses</h2>
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
