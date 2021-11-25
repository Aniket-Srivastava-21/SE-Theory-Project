import axios from 'axios';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import baseUrl from '../services/Baseurl'

export default function MentorForm(props) {
    var history = useHistory();
    let location = useLocation();
    //console.log(location.state);
    const [monday, setmonday] = useState(new Set())
    const [tuesday, settuesday] = useState(new Set())
    const [wednesday, setwednesday] = useState(new Set())
    const [thursday, setthursday] = useState(new Set())
    const [friday, setfriday] = useState(new Set())
    let [timetable, setTT] = useState({});
    const [first, setFirst] = useState(true);
    const [flag, setFlag] = useState(false);
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(location.state.TT);
        setTT(location.state.TT);
        setFlag(true);
        if(first)
        getTimeTable();        
    })
    function getTimeTable(){
        setFirst(false);        
    }

    function handle_submit(e) {
        // console.log(monday, tuesday, wednesday, thursday, friday);
        // console.log("hello");
        if(count != location.state.course.slots){
            e.preventDefault();
            let msg = "Select only " + location.state.course.slots + " slots";
            alert(msg);
            return;
        }
        const fd = new FormData();
        for(const value of monday) {
            fd.append('monday', value);
        }
        for(const value of tuesday) {
            fd.append('tuesday', value);
        }
        for(const value of wednesday) {
            fd.append('wednesday', value);
        }
        for(const value of thursday) {
            fd.append('thursday', value);
        }
        for(const value of friday) {
            fd.append('friday', value);
        }
        fd.append('mentor', localStorage.getItem("name"));
        fd.append('course', location.state.course.subject);
        fd.append('exam', location.state.course.exam);
        const url = baseUrl + "mentor/timetable";
        Axios.post(url, fd, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res) => {
            console.log(res);
            if(res.status === 200) {
                alert("Registered for course Successfully!");
                history.push("/");
            }
            else {
                alert("Some error occured! Try Again");
            }
        })
        e.preventDefault();
    }

    function checkDay(day, slot){
        if(!timeTable){
            return false;
        }
        if(flag){
            let f = false;
            if(day === "monday"){ 
                timetable.monday.forEach(ele => {
                    if(ele.slot == slot){
                        f = true;
                    }
                });
                if(f==true)
                return true;
            }if(day === 'tuesday'){
                timetable.tuesday.forEach(ele => {
                    if(ele.slot == slot){
                        f = true;
                    }
                });
                if(f==true)
                return true;
            }if(day === 'wednesday'){
                timetable.wednesday.forEach(ele => {
                    if(ele.slot == slot){
                        f = true;
                    }
                });
                if(f==true)
                return true;
            }if(day === 'thursday'){
                timetable.thursday.forEach(ele => {
                    if(ele.slot == slot){
                        f = true;
                    }
                });
                if(f==true)
                return true;
            }if(day === 'friday'){
                timetable.friday.forEach(ele => {
                    if(ele.slot == slot){
                        f = true;
                    }
                });
                if(f==true)
                return true;
            }

        }else{
            return true;
        }       
        
        return false;
    }

    return (
        <div className="container">
            <div className="text-center mt-5 display-3">{ location.state.course.subject }</div>
            <form className="row justify-content-center" onSubmit = {handle_submit}>
                <div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-2 text-center">Select your Slots</p>
                    <hr />
                    <div className="row">
                        <div className="fs-4">Monday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("monday",1) ? true : false } id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(1);
                                    setmonday(monday);
                                }
                            }}

                            // disabled={()=>{checkDay("monday",1)}} 
                            />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("monday",2) ? true : false } id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                
                                if(e.target.checked) {
                                    monday.add(2);
                                    setCount(count+1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(2);
                                    setCount(count-1);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("monday",3) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(3);
                                    setCount(count+1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(3);
                                    setCount(count-1);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("monday",4) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(4);
                                    setCount(count+1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(4);
                                    setCount(count-1);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("monday",5) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(5);
                                    setCount(count+1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(5);
                                    setCount(count-1);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Tuesday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("tuesday",1) ? true : false } id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(1);
                                    setCount(count+1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(1);
                                    setCount(count-1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("tuesday",2) ? true : false } id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(2);
                                    setCount(count+1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(2);
                                    setCount(count-1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("tuesday",3) ? true : false }  id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(3);
                                    setCount(count+1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(3);
                                    setCount(count-1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("tuesday",4) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(4);
                                    setCount(count+1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(4);
                                    setCount(count-1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("tuesday",5) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(5);
                                    setCount(count+1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(5);
                                    setCount(count-1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Wednesday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("wednesday",1) ? true : false } id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(1);
                                    setCount(count+1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(1);
                                    setCount(count-1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("wednesday",2) ? true : false } id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(2);
                                    setCount(count+1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(2);
                                    setCount(count-1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("wednesday",3) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(3);
                                    setCount(count+1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(3);
                                    setCount(count-1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("wednesday",4) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(4);
                                    setCount(count+1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(4);
                                    setCount(count-1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("wednesday",5) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(5);
                                    setCount(count+1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(5);
                                    setCount(count-1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Thursday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("thursday",1) ? true : false } id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(1);
                                    setCount(count+1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(1);
                                    setCount(count-1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("thursday",2) ? true : false } id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(2);
                                    setCount(count+1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(2);
                                    setCount(count-1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("thursday",3) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(3);
                                    setCount(count+1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(3);
                                    setCount(count-1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("thursday",4) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(4);
                                    setCount(count+1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(4);
                                    setCount(count-1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("thursday",5) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(5);
                                    setCount(count+1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(5);
                                    setCount(count-1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Friday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("friday",1) ? true : false } id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(1);
                                    setCount(count+1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(1);
                                    setCount(count-1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("friday",2) ? true : false } id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(2);
                                    setCount(count+1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(2);
                                    setCount(count-1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("friday",3) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(3);
                                    setCount(count+1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(3);
                                    setCount(count-1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("friday",4) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(4);
                                    setCount(count+1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(4);
                                    setCount(count-1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" disabled={ checkDay("friday",5) ? true : false } id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(5);
                                    setCount(count+1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(5);
                                    setCount(count-1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="text-end">
                    <button className="btn btn-outline-success btn-lg mt-4 w-25" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
