import React from 'react'
import { Link } from 'react-router-dom'

export default function MentorForm() {
    return (
        <div className="container">
            <div className="text-center mt-5 display-3">Subject_Name</div>
            <div className="row justify-content-center">
                <div className="h-100 col-8 px-5 py-3 border my-4 bg-light outline rounded-3">
                    <p className="fs-2 text-center">Select your Slots</p>
                    <hr />
                    <div className="row">
                        <div className="fs-4">Monday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Tuesday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Wednesday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Thursday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="fs-4">Friday</div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">7:00-9:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">10:00-12:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">13:00-15:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">16:00-18:00</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">18:00-20:00</label>
                        </div>
                    </div>
                    <br />
                    <div className="text-end">
                        <Link to="/mentordashboard" className="btn btn-outline-success btn-lg mt-4 w-25" type="button">Submit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
