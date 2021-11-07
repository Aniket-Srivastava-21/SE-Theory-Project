import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="text-center my-5 container w-25 rounded border">
            <div className="form-signin p-3">
                <form >
                    <h1 className="h3 pt-3 mb-5 fw-normal ">Login</h1>
                    <div className="form-floating">
                        <input 
                        type="email" 
                        className="form-control" id="floatingInput"
                        placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-5">
                        <input type="password" 
                        className="form-control" 
                        id="floatingPassword"
                        placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    
                    <button className="w-50 mt-5 mb-4 btn btn-primary" type="submit">Sign in</button>
                    
                    <br />
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
