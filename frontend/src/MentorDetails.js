import React from 'react'
import { Link } from 'react-router-dom';

export default function MentorDetails() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white rounded bg-dark">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Username</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div className="nav-link text-white" aria-current="page">
                        Email
                    </div>
                </li>
                <li>
                    <div className="nav-link text-white">
                        Address
                    </div>
                </li>
                <li>
                    <div className="nav-link text-white">
                        Registerd Exam
                    </div>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                        Edit Profile
                    </Link>
                </li>
            </ul>
        </div>
    )
}
