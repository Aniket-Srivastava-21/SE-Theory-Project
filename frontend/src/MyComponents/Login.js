import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import baseUrl from '../services/Baseurl'

export const Login = () => {
    let history = useHistory();
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [errmsg, seterrmsg] = useState("");
    const login = (e) => {
        if(passwordReg === "" || emailReg === ""){
            seterrmsg("All fields are required!!");
        }else{
            let url = baseUrl + 'login';
            Axios.post(url, {
                email: emailReg,
                password: passwordReg,
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
        <div className="text-center my-5 container w-25 rounded border border-dark shadow">
            <div className="form-signin p-3">
                <form onSubmit={login}>
                    <h1 className="h3 pt-3 mb-5 fw-normal ">Login</h1>
                    <div className="form-floating">
                        <input 
                        type="email" 
                        onChange={(e)=>{ setEmailReg(e.target.value); }}
                        className="form-control" id="floatingInput"
                        placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-5">
                        <input type="password" 
                        className="form-control" 
                        id="floatingPassword"
                        onChange={(e)=>{ setPasswordReg(e.target.value); }}
                        placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    
                    <button className="w-50 mt-5 mb-4 btn btn-primary" type="submit">Sign in</button>
                    
                    <br />
                    { errmsg !== "" ? <div class="alert alert-danger alert-dismissible fade show">
                        <strong>Error!</strong> {errmsg} </div> : <></> }
                    <div className="row container">
                        <div className="col-10 text-end mt-2 mb-3">Dont have an account?</div>
                        <div className="col-2 mt-2"><Link to="/register" className="">Register</Link></div>
                        <br />
                    </div>
                </form>
            </div>
        </div>
    )
}
