import React from 'react'
import { Link } from 'react-router-dom';

export default function StudentCourseItem(props) {
    return (
        <div class="col-sm-3 ">
            <div class="card text-center border-secondary">
                <div class="card-body">
                    <h5 class="card-title">{props.course.subject}</h5>
                    <h6 class="card-title">Mentor : {props.course.mentor}</h6>
                    <p class="card-text">{props.course.desc}</p>
                    <Link to="/coursedashboard" class="btn btn-primary mt-2">View</Link>
                </div>
            </div>
        </div>
    )
}
