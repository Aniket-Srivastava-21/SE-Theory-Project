import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import baseUrl from '../services/Baseurl';

export default function StudentReminders() {

    useEffect(()=>{
        getTransactions();
    },[])

    let [orders,setOrders] = useState([]);

    function getTransactions(){
        let url = baseUrl + "profile/getTransactions";
        Axios.get(url, {
            headers : {
                "x-access-token" : localStorage.getItem('token'),
            }
        }).then((res)=>{
            setOrders(res.data.result);
        })
    }

    function openPDF(id){
        let url = baseUrl + "profile/viewPDF?oid="+id;
        Axios.get(url, {
            responseType: "blob",
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        })
        .then((res)=>{
            console.log(res);
            const file = new Blob([res.data], { type: "application/pdf" });
              const fileURL = URL.createObjectURL(file);
              window.open(fileURL);
        }) 
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 rounded border border-dark bg-light">
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-4">Receipts</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            { orders.map((order)=>{
                    return <div className="row my-2">
                        <div className="col order-first">
                            Transaction ID: {order._id} 
                        </div>
                        <div className="col order-last">
                            <button onClick={() => {openPDF(order._id)}} className="text-black" > Download receipt </button>
                        </div>
                    </div>
                }) }
               
                
            </ul>
        </div>
    )
}
