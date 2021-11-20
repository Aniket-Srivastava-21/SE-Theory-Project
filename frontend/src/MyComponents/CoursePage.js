import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import baseUrl from '../services/Baseurl';
import { CourseItems } from './CourseItems'

export const CoursePage = () => {

    let location = useLocation();
    useEffect(()=>{
        console.log(location.state);
        getCourseDetails();
    },[])

    let [errmsg, seterrmsg] = useState("");
    let [course, setCourse] = useState({});
    let [isEnrolled, setEnroll] = useState(false);

    function getCourseDetails(){
        let url = baseUrl + "courses/getCourseDetails?sub="+location.state.subject + "&exam="+location.state.exam;
        Axios.get(url, {
            headers : {
                "x-access-token" : localStorage.getItem('token'),
            }
        }).then((res)=>{
            console.log(res.data.result);
            if(res.data.auth){
                setCourse(res.data.result);
                let courses = location.state.user.courses;
                courses.forEach(ele => {
                    if(ele.subjectName === location.state.subject) {
                        setEnroll(true);
                    }                   
                });
            }
            else
            seterrmsg(res.data.msg)
        })
    }

    return (
        <div className="container">
            <div className="text-center mt-5 display-3">{ location.state.subject }</div>
            <div className="row justify-content-center">
            { errmsg === "" ? (<div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-4">Course Instructor: {course.mentor}</p>
                    <p className="fs-4">Start Date: 20/11/2021</p>
                    <p className="fs-4">Last Date to Enroll: 19/11/2021</p>
                    <p className="fs-4">Description: { course.desc }</p>
                    <p className="fs-4">No. of hrs per week: 5</p>
                    <p className="fs-4">Fees: { course.Fees }</p>
                <div className="text-end">
                { isEnrolled ? (<Link to="/coursedashboard" className="btn btn-outline-success btn-lg w-25" type="button">Go to Course</Link>) : 
                (<Link to={{pathname : "/payment", state : { user : location.state.user, course : course }}} className="btn btn-outline-success btn-lg w-25" type="button">Enroll</Link>) }
                
                </div>
            </div>) : <div><h1>No courses available!!</h1></div> }
            
        </div>

        </div>
    )
}
