import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="border mt-5">
            <div className="container">
            <footer className="py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="fs-5"><Link to="/" className="nav-link text-dark px-5">Home</Link></li>
                <li className="fs-5"><Link to="#" className="nav-link text-dark px-5">Mentor Role</Link></li>
                <li className="fs-5"><Link to="#" className="nav-link text-dark px-5">Student Role</Link></li>
                </ul>
                <p className="text-center fs-5 text-muted">© 2021 Exam Preparation Portal, Inc</p>
            </footer>
            </div>
        </div>
    )
}
