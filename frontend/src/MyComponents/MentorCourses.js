import React, { useEffect, useState } from 'react'
import MentorCourseItem from './MentorCourseItem'
import baseUrl from "../services/Baseurl.js"
import Axios from "axios";
import { useLocation } from 'react-router-dom';

export default function MentorCourses() {
    let location = useLocation();

    useEffect(()=>{
        getUserCourses();
    },[])

    let [courses, setCourses] = useState([]);

    function getUserCourses(){
        let url = baseUrl + 'profile/viewCoursesMentor';
        Axios.get(url, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                }
            })
            .then((res)=>{
                console.log(res);    
                setCourses(res.data.result);           
            })
    }
    return (
        <div className="container rounded border border-dark bg-light pt-3">
            <div >
                <h2 className="container row mb-3">My Courses</h2>
                <div className="row">
                    <br />
                    
                    { courses.map((course)=>{
                        return <MentorCourseItem course = {course}/>
                    }) }
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}
