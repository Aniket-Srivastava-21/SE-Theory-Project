import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MentorForm() {

    const [monday, setmonday] = useState(new Set())
    const [tuesday, settuesday] = useState(new Set())
    const [wednesday, setwednesday] = useState(new Set())
    const [thursday, setthursday] = useState(new Set())
    const [friday, setfriday] = useState(new Set())

    function handle_submit(e) {
        console.log(monday, tuesday, wednesday, thursday, friday);
        // console.log("hello");
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="text-center mt-5 display-3">Subject_Name</div>
            <form className="row justify-content-center" onSubmit = {handle_submit}>
                <div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-2 text-center">Select your Slots</p>
                    <hr />
                    <div className="row">
                        <div className="fs-4">Monday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(1);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(1);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(2);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(2);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(3);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(3);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(4);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(4);
                                    setmonday(monday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    monday.add(5);
                                    setmonday(monday);
                                }
                                else {
                                    monday.delete(5);
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
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(1);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(1);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(2);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(2);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(3);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(3);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(4);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(4);
                                    settuesday(tuesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    tuesday.add(5);
                                    settuesday(tuesday);
                                }
                                else {
                                    tuesday.delete(5);
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
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(1);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(1);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(2);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(2);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(3);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(3);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(4);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(4);
                                    setwednesday(wednesday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    wednesday.add(5);
                                    setwednesday(wednesday);
                                }
                                else {
                                    wednesday.delete(5);
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
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(1);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(1);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(2);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(2);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(3);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(3);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(4);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(4);
                                    setthursday(thursday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    thursday.add(5);
                                    setthursday(thursday);
                                }
                                else {
                                    thursday.delete(5);
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
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(1);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(1);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(2);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(2);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(3);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(3);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(4);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(4);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" 
                            onChange = {(e) => {
                                if(e.target.checked) {
                                    friday.add(5);
                                    setfriday(friday);
                                }
                                else {
                                    friday.delete(5);
                                    setfriday(friday);
                                }
                            }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className=" col-5 fs-4">Upload Course plan</div>
                        <div className=" col-7 form-floating">
                            <input className="form-control h-20" type="file" id="formFileMultiple" multiple />
                        </div>
                    </div>
                    <div className="form-floating mb-3 row mt-4">
                        <div className=" col-5 fs-4">Enter Course Price</div>
                        <div className="col-7">
                            <input type="number" className="form-control" placeholder="Price" required />
                        </div>
                    </div>
                    <div className="text-end">
                    <button className="btn btn-outline-success btn-lg mt-4 w-25" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
