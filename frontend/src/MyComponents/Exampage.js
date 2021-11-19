import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const ExamPage = () => {

    let location = useLocation();
    let [exam, setExam] = useState("");
    let [user, setUser] = useState("");
    let [courses, setCourse] = useState([]);

    useEffect(()=>{
        setUser(location.state.user)
        if(location.state.exam === "mains"){
            setExam("JEE-MAINS");
            let sub = ['Maths','Physics','Chemistry']
            setCourse(sub); 
        }
        else if(location.state.exam === "advanced"){
            setExam("JEE-ADVANCED");
            let sub = ['Maths','Physics','Chemistry']
            setCourse(sub); 
        }
        else if(location.state.exam === "gate"){
            let sub = ['Computer Science','Electronics','Mechanical']
            setCourse(sub); 
            setExam("GATE");  
        }
        else if(location.state.exam === "neet"){
            setExam("NEET");      
            let sub = ['Physics','Biology','Chemistry']
            setCourse(sub); 
        }
    },[]);


    return (
        <div className="container py-3">
            <p className="pt-5 pb-3 text-center display-4" >{ exam }</p>
            <hr/>
            <p className="pt-5 text-center display-1" >Subjects</p>
            <div className="row justify-content-center">
            { courses.map((course) => {
                return (
                    <div className="card col-5 my-5 mx-4 px-0">
                    <img src="/assets/images/maths.jpeg" className="card-img-top" height="300px" alt="maths"/>
                    <div className="card-body">
                        <h5 className="card-title">{ course }</h5>
                        <div className="d-flex py-2 justify-content-between">
                        { user.role === "Student" ? <Link to={{pathname : "/courses", state : { user:user, exam : location.state.exam, subject : course }}} className="btn btn-primary">Go to courses</Link> :
                        <Link to="/mentorform"  className="btn btn-primary">Teach Subject</Link>} 
                        </div>
                    </div>
                </div>
                )
            }) }
                
            </div>
        </div>
    )
}