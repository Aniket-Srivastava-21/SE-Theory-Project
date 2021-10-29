import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseItem() {
    return (
        <div class="col-sm-3">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">Course_Name</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <Link to="#" class="btn btn-primary mt-3">View</Link>
                </div>
            </div>
        </div>
    )
}
