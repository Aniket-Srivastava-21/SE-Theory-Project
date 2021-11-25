import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import baseUrl from '../services/Baseurl';

export default function MentorForm0() {
    let location = useLocation();
    let history = useHistory();
    useEffect(()=>{
        console.log(location.state);
    })
    let [desc, setDesc] = useState("");
    let [fees, setFees] = useState(Number);
    let [slots, setSlots] = useState(Number);
    let [fileName,setFile] = useState([]);

    function submitForm(e){
        if(slots > 6){
            e.preventDefault();
            alert('Maximum possible slots is only 6');
            return;
        }
        const fd = new FormData();
        fd.append('desc',desc);
        fd.append('fees',fees);
        fd.append('slots',slots);
        fd.append('mentor',location.state.user.name);
        fd.append('subject',location.state.subject);
        fd.append('exam',location.state.exam1.alt);
        fd.append('file',fileName[0]);
        let url = baseUrl + "courses/addCourse";
        Axios.post(url, 
            fd,
            {
                headers : {
                    "x-access-token" : localStorage.getItem('token'),
                    'content-type': 'multipart/form-data'
                }
            }
            ).then((res)=>{
                console.log(res);
                let url1 = baseUrl + "exam/getTT?exam="+location.state.exam1.alt;
                Axios.get(url1,{
                    headers : {
                        "x-access-token" : localStorage.getItem('token')
                    }
                }).then((res1)=>{
                    console.log(res.data.result);
                    console.log(res1.data.result);
                    history.push({
                        pathname : "/mentorform",
                        state : {
                            course : res.data.result,
                            TT : res1.data.result,
                        }
                    })
                })
                
            })
        e.preventDefault();
    }


    return (
        <div>
            <div className="container">
            <div className="text-center mt-5 display-3">{location.state.exam} - { location.state.subject }</div>
            <div className="">
             <form onSubmit={submitForm}>
                <div className="text-center my-5 container w-75 p-5 ps-0 pt-3 rounded border border-dark shadow">
                    <p className="fs-1 text-center">Create Course</p>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">Course Description</div>
                        <div className="col-7">
                            <textarea type="text" onChange={(e)=>{ setDesc(e.target.value) }} className="form-control" placeholder="Description" required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className=" col-5 fs-4">Upload Course plan</div>
                        <div className=" col-7 form-floating">
                            <input className="form-control h-20" onChange={(e)=>{ setFile(e.target.files) }} type="file" id="formFileMultiple" multiple/>
                        </div>
                    </div>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">Course Fees</div>
                        <div className="col-7">
                            <input type="number" onChange={(e)=>{ setFees(e.target.value) }} className="form-control" placeholder="Price" required />
                        </div>
                    </div>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">No. of slots</div>
                        <div className="col-7">
                            <input type="number" className="form-control" onChange={(e)=>{ setSlots(e.target.value) }} placeholder="Max slots 6" required />
                        </div>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-outline-success btn-lg mt-4 w-25" type="submit">Next</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    )
}
