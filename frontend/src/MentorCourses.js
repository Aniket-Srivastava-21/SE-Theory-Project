import React from 'react'
import MentorCourseItem from './MentorCourseItem'
export default function MentorCourses() {
    return (
        <div className="container rounded bg-dark pt-3">
            <div >
                <h2 className="container row text-white mb-3">My Courses</h2>
                <div className="row">
                    <br />
                    <MentorCourseItem />
                    <MentorCourseItem />
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}
