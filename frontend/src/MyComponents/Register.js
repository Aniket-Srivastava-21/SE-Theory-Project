import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    const [role, setrole] = useState("")
    return (
        <div className="text-center my-5 container w-25 rounded border">
            <div className="form-signin p-3">
                <form>
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
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="username"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <button
                        className="w-50 mt-5 mb-4 btn btn-primary" type="submit">Sign up</button>

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
