import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import Axios from "axios";


export const Header = () => {


    let history = useHistory();


	function logout(){
		localStorage.removeItem("token");
		history.push("/login");
		window.location.reload();
	}

    function gotoDashboard(){
               
    }

	function CheckLogin(){
		const token = localStorage.getItem('token');
		if(!token){
			return (
				<div className="text-end">
					<Link to="/login">
					<button type="button" className="btn btn-lg btn-outline-primary mx-3">Login</button>
					</Link>
					<Link to="/register">
					<button type="button" className="btn btn-lg btn-outline-primary mx-3">Register</button>
					</Link>
				</div>				
			)
		} else {
			return (
				<div className="text-end">
					<Link to="#">
					<button type="button" className="btn btn-lg btn-outline-primary mx-3" onClick={gotoDashboard}>Profile</button>
					</Link>
					<button type="button" className="btn btn-lg btn-outline-primary mx-3" onClick={logout}>Logout</button>
						
				</div>
			)
		}
	}

    return (
        <div>
            <header className="p-3 bg-light border fs-5">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link me-5 text-dark fs-4">Exam Preparation Portal</Link></li>
                    <li><Link to="#" className="nav-link me-5 text-dark">Mentor Role</Link></li>
                    <li><Link to="#" className="nav-link me-5 text-dark">Student Role</Link></li>
                    </ul>
                    
        
                    <CheckLogin />
                    
                    
                </div>
                </div>
            </header>
        </div>
    )
}
