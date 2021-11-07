import React from 'react'
import { Link } from 'react-router-dom';

export default function StudentDetails() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 rounded border border-dark bg-light">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-4">Username</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div className="nav-link text-black" aria-current="page">
                        Email
                    </div>
                </li>
                <li>
                    <div className="nav-link text-black">
                        Address
                    </div>
                </li>
                <li>
                    <div className="nav-link text-black">
                        Registerd Exam
                    </div>
                </li>
                <li>
                    <Link to="#" className="nav-link text-black">
                        Edit Profile
                    </Link>
                </li>
            </ul>
        </div>
    )
}
