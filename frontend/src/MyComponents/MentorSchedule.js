import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import baseUrl from '../services/Baseurl'

export default function MentorSchedule(props) {

    useEffect(() => {
        getTimetableFromDB();
    }, [],
    );
    const [data, setData] = useState({})
    const [monday, setmonday] = useState(["", "", "", "", "", ""])
    const [tuesday, settuesday] = useState(["", "", "", "", "", ""])
    const [wednesday, setwednesday] = useState(["", "", "", "", "", ""])
    const [thursday, setthursday] = useState(["", "", "", "", "", ""])
    const [friday, setfriday] = useState(["", "", "", "", "", ""])

    var Data;
    var url = baseUrl + "mentor/gettimetable";
    console.log(props.exam);

    function getTimetableFromDB() {
        Axios.post(url, {exam: props.exam}, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res) => {
            console.log(res.data.result);
            Data = res.data.result;
            console.log(Data);
            setData(Data);
            console.log(data);
            for(var i=0; i<Data.monday.length; i++) {
                monday[Data.monday[i].slot] = Data.monday[i].course;
                setmonday(monday);
            }
            for(var i=0; i<Data.tuesday.length; i++) {
                tuesday[Data.tuesday[i].slot] = Data.tuesday[i].course;
                settuesday(tuesday);
            }
            for(var i=0; i<Data.wednesday.length; i++) {
                wednesday[Data.wednesday[i].slot] = Data.wednesday[i].course;
                setwednesday(wednesday);
            }
            for(var i=0; i<Data.thursday.length; i++) {
                thursday[Data.thursday[i].slot] = Data.thursday[i].course;
                setthursday(thursday);
            }
            for(var i=0; i<Data.friday.length; i++) {
                friday[Data.friday[i].slot] = Data.friday[i].course;
                setfriday(friday);
            }
        })
    }
    
    return (
        <div className="container rounded mt-5 border bg-light border-dark py-3">
        <h2 className="container row mb-3">Time Table</h2>
        <table class="table border border-secondary table-hover table-bordered">
            <thead>
                {console.log(monday)}
                {console.log(tuesday)}
                {console.log(wednesday)}
                {console.log(thursday)}
                {console.log(friday)}
                    <tr>
                        <th scope="col">Day/Time</th>
                        <th scope="col">7:00 - 9:00</th>
                        <th scope="col">10:00 - 12:00</th>
                        <th scope="col">13:00 - 15:00</th>
                        <th scope="col">16:00 - 18:00</th>
                        <th scope="col">18:00 - 20:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Monday</th>
                        {monday[1] === "" ? <td> </td> : <td>{monday[1]}</td>}
                        {monday[2] === "" ? <td> </td> : <td>{monday[2]}</td>}
                        {monday[3] === "" ? <td>{"bye"}</td> : <td>{"hello1"}</td>}
                        {monday[4] === "" ? <td> </td> : <td>{console.log(monday[4])} {monday[4]}</td>}
                        {monday[5] === "" ? <td> </td> : <td>{monday[5]}</td>} 
                    </tr>
                    <tr>
                        <th scope="row">Tuesday</th>
                        {tuesday[1] === "" ? <td> </td> : <td>{tuesday[1]}</td>}
                        {tuesday[2] === "" ? <td> </td> : <td>{tuesday[2]}</td>}
                        {tuesday[3] === "" ? <td> </td> : <td>{tuesday[3]}</td>}
                        {tuesday[4] === "" ? <td> </td> : <td>{tuesday[4]}</td>}
                        {tuesday[5] === "" ? <td> </td> : <td>{tuesday[5]}</td>}
                    </tr>
                    <tr>
                        <th scope="row">Wednesday</th>
                        {wednesday[1] === "" ? <td> </td> : <td>{wednesday[1]}</td>}
                        {wednesday[2] === "" ? <td> </td> : <td>{wednesday[2]}</td>}
                        {wednesday[3] === "" ? <td> </td> : <td>{wednesday[3]}</td>}
                        {wednesday[4] === "" ? <td> </td> : <td>{wednesday[4]}</td>}
                        {wednesday[5] === "" ? <td> </td> : <td>{wednesday[5]}</td>}
                    </tr>
                    <tr>
                        <th scope="row">Thursday</th>
                        {thursday[1] === "" ? <td> </td> : <td>{thursday[1]}</td>}
                        {thursday[2] === "" ? <td> </td> : <td>{thursday[2]}</td>}
                        {thursday[3] === "" ? <td> </td> : <td>{thursday[3]}</td>}
                        {thursday[4] === "" ? <td> </td> : <td>{thursday[4]}</td>}
                        {thursday[5] === "" ? <td> </td> : <td>{thursday[5]}</td>}
                    </tr>
                    <tr>
                        <th scope="row">Friday</th>
                        {friday[1] === "" ? <td> </td> : <td>{friday[1]}</td>}
                        {friday[2] === "" ? <td> </td> : <td>{friday[2]}</td>}
                        {friday[3] === "" ? <td> </td> : <td>{friday[3]}</td>}
                        {friday[4] === "" ? <td> </td> : <td>{friday[4]}</td>}
                        {friday[5] === "" ? <td> </td> : <td>{friday[5]}</td>}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
