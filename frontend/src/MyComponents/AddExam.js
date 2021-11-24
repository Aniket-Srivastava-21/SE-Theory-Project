import React, {useEffect, useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Axios from 'axios';
import baseUrl from '../services/Baseurl'


export default function AddExam() {
    var history = useHistory();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [sub1, setSub1] = useState("");
    const [sub2, setSub2] = useState("");
    const [sub3, setSub3] = useState("");
    const [alt, setAlt] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function saveChanges(e){
        let url = baseUrl + 'exam/addexam'
        let sub = [];
        sub.push(sub1);
        sub.push(sub2);
        sub.push(sub3);
        Axios.post(url,{
            name : name, 
            desc : desc,
            sub : sub,
            alt :alt,
            startDate : startDate,
            endDate : endDate, 
        }, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        }).then((res)=>{
            console.log(res);
            history.push("/");
        })
       
        e.preventDefault();
    }
    



    return (
        <div className="text-center container w-25 rounded bg-dark">
            <div className="form-signin my-5 p-3">
                <form onSubmit={saveChanges}>
                    <h1 className="h3 mb-4 pt-3 fw-normal text-white">Add Exam</h1>
                    <div className="form-floating mt-4">
                        <input type="Description" onChange={(e) => {setName(e.target.value)}} className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Exam Name</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="Description" onChange={(e) => {setAlt(e.target.value)}} className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Alt Name</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="itemTitle" className="form-control" onChange={(e) => {setDesc(e.target.value)}}  placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" onChange={(e) => {setSub1(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Subject1</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" onChange={(e) => {setSub2(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Subject2</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" onChange={(e) => {setSub3(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Subject3</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="date" className="form-control" onChange={(e) => {setStartDate(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Start Date</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="date" className="form-control" onChange={(e) => {setEndDate(e.target.value)}} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">End Date</label>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <button  className="mt-2 btn-success mb-4 btn btn-primary" type="submit">Save Changes</button>
                        </div>
                        <div className="col-6">
                        <Link to="/">
                        <button className="ms-3 mt-2 btn-danger mb-4 btn btn-primary" type="cancel">Cancel</button>
                        </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
