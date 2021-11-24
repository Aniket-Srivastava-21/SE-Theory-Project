import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import baseUrl from '../services/Baseurl';

export default function MentorSchedule() {

    useEffect(()=>{
        console.log(location.state);
        if(firstTime){
            getTimeTable();
            getUserCourses();
        }
    })
    let location = useLocation();
    let [firstTime, setFirstTime] = useState(true);
    let [timetable, setTT] = useState({});
    let [myCourses, setCourses] = useState([]);
    const [flag, setFlag] = useState(false);
    function getTimeTable(){
        setFirstTime(false);
        let url1 = baseUrl + "exam/getTT?exam="+location.state.exam;
                Axios.get(url1,{
                    headers : {
                        "x-access-token" : localStorage.getItem('token')
                    }
                }).then((res1)=>{
                    console.log(res1.data.result);     
                    setTT(res1.data.result); 
                    setFlag(true);              
                })
    }

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

    function checkDay(day, slot){
        let f = false;
        let subject = '';
        if(flag){            
            if(day === "monday"){ 
                timetable.monday.forEach(ele => {
                    if(ele.slot == slot){
                        myCourses.forEach((course1)=>{
                            if(course1.subject == ele.course){
                                f = true;
                                subject = ele.course;
                            }
                        })
                    }
                });
                if(f==true)
                return subject;
            }if(day === 'tuesday'){
                timetable.tuesday.forEach(ele => {
                    if(ele.slot == slot){
                        myCourses.forEach((course1)=>{
                            if(course1.subject == ele.course){
                                f = true;
                                subject = ele.course;
                            }
                        })
                    }
                });
                if(f==true)
                return subject;
            }if(day === 'wednesday'){
                timetable.wednesday.forEach(ele => {
                    if(ele.slot == slot){
                        myCourses.forEach((course1)=>{
                            if(course1.subject == ele.course){
                                f = true;
                                subject = ele.course;
                            }
                        })
                    }
                });
                if(f==true)
                return subject;
            }if(day === 'thursday'){
                timetable.thursday.forEach(ele => {
                    if(ele.slot == slot){
                        myCourses.forEach((course1)=>{
                            if(course1.subject == ele.course){
                                f = true;
                                subject = ele.course;
                            }
                        })
                    }
                });
                if(f==true)
                return subject;
            }if(day === 'friday'){
                timetable.friday.forEach(ele => {
                    if(ele.slot == slot){
                        myCourses.forEach((course1)=>{
                            if(course1.subject== ele.course){
                                f = true;
                                subject = ele.course;
                            }
                        })
                    }
                });
                if(f==true)
                return subject;
            }
        }else{
            return subject;
        }       
        
        return subject;
    }

    return (
        <div className="container rounded mt-5 border bg-light border-dark py-3">
            <h2 className="container row mb-3">Time Table</h2>
            <table class="table border border-secondary table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Day/Time</th>
                        <th scope="col">7:00 - 9:00</th>
                        <th scope="col">10:00 - 12:00</th>
                        <th scope="col">13:00 - 16:00</th>
                        <th scope="col">16:00 - 18:00</th>
                        <th scope="col">18:00 - 20:00</th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr>
                        <th scope="row">Monday</th>
                        <td>{checkDay("monday",1) }</td>
                        <td>{checkDay("monday",2) }</td>
                        <td>{checkDay("monday",3) }</td>
                        <td>{checkDay("monday",4) }</td>
                        <td>{checkDay("monday",5) }</td>
                    </tr>
                    <tr>
                        <th scope="row">Tuesday</th>
                        <td>{checkDay("tuesday",1) }</td>
                        <td>{checkDay("tuesday",2) }</td>
                        <td>{checkDay("tuesday",3) }</td>
                        <td>{checkDay("tuesday",4) }</td>
                        <td>{checkDay("tuesday",5) }</td>
                    </tr>
                    <tr>
                        <th scope="row">Wednesday</th>
                        <td>{checkDay("wednesday",1) }</td>
                        <td>{checkDay("wednesday",2) }</td>
                        <td>{checkDay("wednesday",3) }</td>
                        <td>{checkDay("wednesday",4) }</td>
                        <td>{checkDay("wednesday",5) }</td>
                    </tr>
                    <tr>
                        <th scope="row">Thursday</th>
                        <td>{checkDay("thursday",1) }</td>
                        <td>{checkDay("thursday",2) }</td>
                        <td>{checkDay("thursday",3) }</td>
                        <td>{checkDay("thursday",4) }</td>
                        <td>{checkDay("thursday",5) }</td>
                    </tr>
                    <tr>
                        <th scope="row">Friday</th>
                        <td>{checkDay("friday",1) }</td>
                        <td>{checkDay("friday",2) }</td>
                        <td>{checkDay("friday",3) }</td>
                        <td>{checkDay("friday",4) }</td>
                        <td>{checkDay("friday",5) }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}