import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link ,useLocation } from 'react-router-dom';
import baseUrl from '../services/Baseurl';

export default function CourseItem(props) {
    useEffect(()=>{
        getExamDetail();
    })
    let location = useLocation();
    let [exam, setExam] = useState({});
    function getExamDetail(){
        let url = baseUrl + "exam/getExamDetail?exam="+props.course.exam;
        Axios.get(url,{
            headers : {
                "x-access-token" : localStorage.getItem('token')
            }
        }).then((res)=>{
            setExam(res.data.result);
        })
    }
    return (
        <div class="col-sm-3 ">
            <div class="card text-center border-secondary">
                <div class="card-body">
                    <h5 class="card-title">{props.course.subject}</h5>
                    <p class="card-text">{props.course.desc}</p>
                    <Link to={ {
                        pathname:"/teacherdashboard",
                        state: {  course : props.course, exam1 : exam} }} class="btn btn-primary mt-2">View</Link>
                </div>
            </div>
        </div>
    )
}
