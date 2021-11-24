import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import baseUrl from '../services/Baseurl';

export const ExamPage = (props) => {

    let history = useHistory();
    let location = useLocation();
    let [exam, setExam] = useState("");
    let [user, setUser] = useState("");
    let [courses, setCourse] = useState([]);

    let token = localStorage.getItem('token');

    useEffect(()=>{
        setUser(location.state.user)
        setCourse(location.state.exam1.subjects);
    },[]);

    function checkMentor(course){
        let url = baseUrl + "exam/checkMentor?exam="+location.state.exam1.alt + "&subject=" + course;
        Axios.get(url, {
            headers : {
                "x-access-token" : localStorage.getItem('token'),
            }
        }).then((res)=>{
            if(res.data.auth){
                if(res.data.result.mentor === user.name){
                    history.push({
                        pathname : "/teacherdashboard", 
                        state : { user:user, exam : location.state.exam, course : res.data.result, exam1 : location.state.exam1 }
                    })                    
                }else{
                    alert('Mentor is already assigned for this subject!!');
                }
            }else{
                history.push({
                    pathname : "/mentorform0", 
                    state : { user:user, exam : location.state.exam, subject : course, exam1 : location.state.exam1 }
                })
            }
        })
    }

    return (
        <div className="container py-3">
            <p className="pt-5 pb-3 text-center display-4" >{ location.state.exam1.name }</p>
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
                        { token !== null ? (user.role === "Student" ? <Link to={{pathname : "/courses", 
                        state : { user:user, exam : location.state.exam, subject : course, exam1 : location.state.exam1 }}} className="btn btn-primary">Go to courses</Link> :
                        <button onClick={()=>{checkMentor(course)}}  className="btn btn-primary">Teach Subject</button>) : 
                        (<Link to="/login"  className="btn btn-primary">Login to view details</Link>) }

                        {/* state : { user:user, exam : location.state.exam, subject : course }}} className="btn btn-primary" onClick={(e) => {props.setCourse(course)}}>Go to courses</Link> :
                        <Link to={{pathname : "/mentorform0", 
                        state : { user:user, exam : location.state.exam, subject : course }}} className="btn btn-primary" onClick={(e) => {props.setCourse(course)}} >Teach Subject</Link>) : (<Link to="/login"  className="btn btn-primary">Login to view details</Link>) } */}
                        {/* { user.role === "Student" ? <Link to={{pathname : "/courses", state : { user:user, exam : location.state.exam, subject : course }}} className="btn btn-primary">Go to courses</Link> :
                        <Link to="/mentorform"  className="btn btn-primary">Teach Subject</Link>}  */}
                        </div>
                    </div>
                </div>
                )
            }) }
                
            </div>
        </div>
    )
}