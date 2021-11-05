import React from 'react'
import MentorCourseItem from './MentorCourseItem'
export default function MentorCourses() {
    return (
        <div className="container rounded border border-dark bg-light pt-3">
            <div >
                <h2 className="container row mb-3">My Courses</h2>
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
