import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <header className="p-3 bg-light border fs-5">
                <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link me-5 text-dark">EXAM PREPARATION PORTAL</Link></li>
                    <li><Link to="#" className="nav-link me-5 text-dark">Mentor Role</Link></li>
                    <li><Link to="#" className="nav-link me-5 text-dark">Student Role</Link></li>
                    </ul>

                    <div className="text-end">
                    <Link to="/login">
                    <button type="button" className="btn btn-lg btn-outline-primary mx-5">Login</button>
                    </Link>
                    <Link to="/register">
                    <button type="button" className="btn btn-lg btn-outline-success">Sign-up</button>
                    </Link>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}
