import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import baseUrl from '../services/Baseurl';

export const Register = () => {
    

    let history = useHistory();
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [cpasswordReg, setCpasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [nameReg, setNameReg] = useState("");
    const [role, setrole] = useState("");
    const [errmsg, seterrmsg] = useState("");


    const register = (e) => {
        if(usernameReg === "" || emailReg === ""||passwordReg === ""){
            seterrmsg("All fields are required!");
        }else if(passwordReg.length < 6){
            seterrmsg("Password must be atleast 6 characters");
        }
        else{
            let url = baseUrl + 'register';
            Axios.post(url, {
                username: usernameReg,
                email: emailReg,
                name : nameReg,
                password: passwordReg,
                cpassword: cpasswordReg,
                role : role
                
            })
            .then((res)=>{
                console.log(res);
                if(res.data.auth){
                    localStorage.setItem("token", res.data.token);
                    history.push('/');
                    window.location.reload();
                }else{
                    seterrmsg(res.data.msg);
                }
            }) 

        }
        
        e.preventDefault();       
    };

    return (
        <div className="text-center my-5 container w-25 rounded border">
            <div className="form-signin p-3">
                <form onSubmit={register}>
                    <h1 className="h3 mb-5 pt-3 fw-normal ">Register</h1>
                    <div className="form-floating">
                    <div className="dropdown">
                        <button className="btn w-100 btn-secondary dropdown-toggle" type="button" id="rolebutton" data-bs-toggle="dropdown" aria-expanded="false">
                            {role === "" ? "Choose role" : role }
                        </button>
                        <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                            <li><div className="dropdown-item" onClick={() => {setrole("Student")}} >Student</div></li>
                            <li><div className="dropdown-item" onClick={() => {setrole("Mentor")}}>Mentor</div></li>
                        </ul>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            onChange={(e)=>{ setEmailReg(e.target.value) }}
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="username"
                            className="form-control"
                            id="floatingInput"
                            onChange={(e)=>{ setUsernameReg(e.target.value) }}
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            onChange={(e)=>{ setNameReg(e.target.value) }}
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            onChange={(e)=>{ setPasswordReg(e.target.value) }}
                            placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            onChange={(e)=>{ setCpasswordReg(e.target.value) }}
                            placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <button
                        className="w-50 mt-5 mb-4 btn btn-primary" type="submit">Sign up</button>
                         { errmsg !== "" ? <div class="alert alert-danger alert-dismissible fade show">
                        <strong>Error!</strong> {errmsg} </div> : <></> }

                    <div className="row container">
                        <div className="col-8 text-end mb-3">Already a user? </div>
                        <div className="col-4"><Link to="/login" className="">Login</Link></div>
                        <br />
                    </div>
                </form>
            </div>
        </div>
    )
}
