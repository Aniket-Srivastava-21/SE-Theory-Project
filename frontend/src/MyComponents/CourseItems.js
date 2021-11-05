import React from 'react'
import { Link } from 'react-router-dom';

export const CourseItems = () => {
    return (
        <div className="row justify-content-center">
            <div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-4">Course Instructor: Intructor_Name</p>
                    <p className="fs-4">Start Date: Starting_Date</p>
                    <p className="fs-4">Last Date to Enroll: Last_date_to_enroll</p>
                    <p className="fs-4">Topics Covered: Topics_Covered</p>
                    <p className="fs-4">No. of hrs per week: No_of_hrs</p>
                    <p className="fs-4">Fees: Fee_amount</p>
                <div className="text-end">
                <Link to="/payment" className="btn btn-outline-success btn-lg w-25" type="button">Enroll</Link>
                </div>
            </div>
        </div>
    )
}