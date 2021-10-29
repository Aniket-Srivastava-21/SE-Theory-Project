import React from 'react'

export default function MentorSchedule() {
    return (
        <div className="container rounded mt-5 bg-dark py-3">
            <h2 className="container row text-white mb-3">Time Table</h2>
            <table class="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Day/Time</th>
                        <th scope="col">7:00 - 9:00</th>
                        <th scope="col">10:00 - 12:00</th>
                        <th scope="col">13:00 - 16:00</th>
                        <th scope="col">16:00 - 18:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Monday</th>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Math</td>
                        <td>Chem</td>
                    </tr>
                    <tr>
                        <th scope="row">Tuesday</th>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Math</td>
                        <td>Chem</td>
                    </tr>
                    <tr>
                        <th scope="row">Wednesday</th>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Math</td>
                        <td>Chem</td>
                    </tr>
                    <tr>
                        <th scope="row">Thursday</th>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Math</td>
                        <td>Chem</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
