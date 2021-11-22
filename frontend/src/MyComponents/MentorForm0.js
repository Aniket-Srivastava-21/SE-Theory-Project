import React from 'react'
import { Link } from 'react-router-dom'

export default function MentorForm0() {
    return (
        <div>
            <div className="container">
            <div className="text-center mt-5 display-3">Subject_Name</div>
            <div className="row justify-content-center">
                <div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-2 text-center">Create Course</p>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">Course Description</div>
                        <div className="col-7">
                            <textarea type="text" className="form-control" placeholder="Description" required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className=" col-5 fs-4">Upload Course plan</div>
                        <div className=" col-7 form-floating">
                            <input className="form-control h-20" type="file" id="formFileMultiple" />
                        </div>
                    </div>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">Course Price</div>
                        <div className="col-7">
                            <input type="number" className="form-control" placeholder="Price" required />
                        </div>
                    </div>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">No. of hours required</div>
                        <div className="col-7">
                            <input type="number" className="form-control" placeholder="Hours" required />
                        </div>
                    </div>
                    <div className="text-end">
                        <Link to="/mentorform" className="btn btn-outline-success btn-lg mt-4 w-25" type="button">Next</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
