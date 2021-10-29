import React from 'react'

export default function StudentReminders() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white rounded bg-dark">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Reminders</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <div className="nav-link text-white" aria-current="page">
                    Chemistry Test 1 opens Friday, 5 November, 5:00 PM
                    </div>
                </li>
                <li>
                    <div className="nav-link text-white">
                    Physics Test 2 opens Friday, 5 November, 5:00 PM
                    </div>
                </li>
            </ul>
        </div>
    )
}
