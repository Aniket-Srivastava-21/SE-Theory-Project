import React from 'react'
import { Link } from 'react-router-dom'

export const ExamPage = () => {
    return (
        <div className="container py-3">
            <p className="pt-5 pb-3 text-center display-4" >EXAM NAME</p>
            <hr/>
            <p className="pt-5 text-center display-1" >Subjects</p>
            <div className="row justify-content-center">
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/maths.jpeg" className="card-img-top" height="300px" alt="maths"/>
                <div className="card-body">
                    <h5 className="card-title">Subject Title</h5>
                    <p className="card-text">Quick description of the subject and to let users know about the subject</p>
                    <Link to="/courses" className="btn btn-primary">Go to courses</Link>
                </div>
                </div>
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/physics.jpg" className="card-img-top" height="300px" alt="physics"/>
                <div className="card-body">
                    <h5 className="card-title">Subject Title</h5>
                    <p className="card-text">Quick description of the subject and to let users know about the subject</p>
                    <Link to="/courses" className="btn btn-primary">Go to courses</Link>
                </div>
                </div>
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/chemistry.jpg" className="card-img-top" height="300px" alt="chemistry"/>
                <div className="card-body">
                    <h5 className="card-title">Subject Title</h5>
                    <p className="card-text">Quick description of the subject and to let users know about the subject</p>
                    <Link to="/courses" className="btn btn-primary">Go to courses</Link>
                </div>
                </div>
            </div>
        </div>
    )
}