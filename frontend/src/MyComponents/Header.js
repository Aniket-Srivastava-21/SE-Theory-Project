import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import Axios from "axios";
import baseUrl from "../services/Baseurl.js"


export const Header = () => {


    let history = useHistory();


	function logout(){
		// localStorage.removeItem("token");
		localStorage.clear();
		history.push("/login");
		window.location.reload();
	}

    function gotoDashboard(){
		let url = baseUrl + 'profile/getRole'
        Axios.get(url, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res);
			if(res.data.result.role === 'Student'){
				history.push({pathname : "/studentdashboard", state : res.data.result });
				//window.location.reload();
				
			}else{
				history.push({pathname : "/mentordashboard",  state : res.data.result});
				//window.location.reload();
			}
            //setOrders(res.data.result);
        }) 

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
					<button type="button" className="btn btn-lg btn-outline-primary mx-3" onClick={gotoDashboard}>Profile</button>
					<button type="button" className="btn btn-lg btn-outline-primary mx-3" onClick={logout}>Logout</button>
						
				</div>
			)
		}
	}

    return (
        <div>
            <header className="p-3 bg-light border fs-5">
                <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link me-5 text-dark fs-4">Exam Preparation Portal</Link></li>
                    <li><a className="nav-link me-5 text-dark" >Mentor Role</a></li>
                    <li><a className="nav-link me-5 text-dark">Student Role</a></li>
                    </ul>
                    
        
                    <CheckLogin />
                    
                    
                </div>
                </div>
            </header>
        </div>
    )
}
