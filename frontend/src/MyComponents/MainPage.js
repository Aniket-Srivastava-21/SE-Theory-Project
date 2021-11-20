import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import baseUrl from '../services/Baseurl.js'



export const MainPage = () => {

    let token = localStorage.getItem('token');

    useEffect(()=>{
        if(token !== null)
        getUserData();
    },[])

    let [exam, setExam] = useState("");
    let [user, setUser] = useState({});
    
    function getUserData(){
        let url = baseUrl + 'profile/getUserData';
        Axios.get(url,{
            headers : {
                "x-access-token":localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res);
            setUser(res.data.result);
            setExam(res.data.result.exam);
        })
    }


    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/assets/images/exam_prep1.jpg" className="d-block w-100 " height="500px" alt="exam-prep"/>
                </div>
                <div className="carousel-item">
                <img src="/assets/images/exam_prep2.jpg" className="d-block w-100 " height="500px" alt="exam-prep"/>
                </div>
                <div className="carousel-item">
                <img src="/assets/images/exams1.jpg" className="d-block w-100 " height="500px" alt="exam-prep"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            <hr/>
            <p className="pt-5 text-center display-1" >EXAMS</p>
            <div className="row justify-content-center">
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/mains.jpg" className="card-img-top" height="300px" alt="mains"/>
                <div className="card-body">
                    <h5 className="card-title">Exam Name</h5>
                    <p className="card-text">Brief exam description to let users know the most importants details of the exam</p>
                    { (exam === "" || exam === "mains") ?   <Link to={{pathname : "/exam", state : { user : user, exam : "mains" }}} className="btn btn-primary">Go to Exam</Link> : 
                    <Link to="#" ><button className="btn btn-primary" disabled>Go to Exam</button></Link>}
                   
                </div>
                </div>
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/advanced.jpg" className="card-img-top" height="300px" alt="advanced"/>
                <div className="card-body">
                    <h5 className="card-title">Exam Name</h5>
                    <p className="card-text">Brief exam description to let users know the most importants details of the exam</p>
                    { (exam === "" || exam === "advanced") ?   <Link to={{pathname : "/exam", state : { user : user, exam : "advanced" }}} className="btn btn-primary">Go to Exam</Link> : 
                    <Link to="#" ><button className="btn btn-primary" disabled>Go to Exam</button></Link>}
                </div>
                </div>
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/gate.jpeg" className="card-img-top" height="300px" alt="gate"/>
                <div className="card-body">
                    <h5 className="card-title">Exam Name</h5>
                    <p className="card-text">Brief exam description to let users know the most importants details of the exam</p>
                    { (exam === "" || exam === "gate")?   <Link to={{pathname : "/exam", state : { user : user, exam : "gate" }}} className="btn btn-primary">Go to Exam</Link> : 
                    <Link to="#" ><button className="btn btn-primary" disabled>Go to Exam</button></Link>}
                </div>
                </div>
                <div className="card col-5 my-5 mx-4 px-0">
                <img src="/assets/images/neet.jpeg" className="card-img-top" height="300px" alt="neet"/>
                <div className="card-body">
                    <h5 className="card-title">Exam Name</h5>
                    <p className="card-text">Brief exam description to let users know the most importants details of the exam</p>
                    { (exam === "" || exam === "neet") ?   <Link to={{pathname : "/exam", state : { user : user, exam : "neet" }}} className="btn btn-primary">Go to Exam</Link> : 
                    <Link to="#" ><button className="btn btn-primary" disabled>Go to Exam</button></Link>}
                </div>
                </div>
            </div>
        </div>
    )
}
