import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import baseUrl from '../services/Baseurl';
import StudentCourseItem from './StudentCourseItem'

export default function StudentCourses() {
    let location = useLocation();

    useEffect(()=>{
        getUserCourses();
    },[])

    let [courses, setCourses] = useState([]);

    function getUserCourses(){
        let url = baseUrl + 'profile/viewCourses';
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
        <div className="container bg-light rounded border border-dark pt-3">
            <div >
                <h2 className="container row mb-3">My Courses</h2>
                <div className="row">
                    <br />
                    { courses.map((course)=>{
                        return <StudentCourseItem course={course}/>
                    }) }
                    
                    
                    <br />
                </div>
                <br />
            </div>
        </div>
    )
}
