import React from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../UI/Navbar';


function Hosview() {
    const [columns, setcolumns] = useState([]);
    const [records, setrecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:1234/hospital/all")
            .then((response) => {
                setcolumns(Object.keys(response.data[0]));
                setrecords(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
}, []);

    let handleSubmit = (hid) => {
        const conf = window.confirm("Do you want to delete?");
        if(conf){
            axios
                .delete("http://localhost:1234/hospital/"+hid)
                .then((res) => {
                    alert("Record Deleted Successfully!");
                    navigate("/Hosview");
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        }
    };
  return (
    <>

    <div style={{height:"650px",backgroundImage: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)"}}>
       <div className='container'>
        <br />
       <a href='/' className='btn btn-info'>Home</a>
                <h1 className='display-1 text-center' style={{color:"black"}}>Hospital Details</h1>

            <div className="text-end">
                <Link to="/Hosadd" className="btn btn-info">
                    + Add Hospital
                </Link>
            </div>

            <br />

            <table className="table table-bordered table-hover table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr align="center">
                {/* {columns.map((c,i)  => (
                    <th key={i}> {c} </th>
                ))} */}
                <th>Hospital ID</th>
                <th>Hospital Name</th>
                <th>Hospital City</th>
                <th>Hospital Rating</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
                {records.map((d,i) => (
                    <tr key={i} align="center">
                        <td>{d.hid}</td>
                        <td>{d.hname}</td>
                        <td>{d.hcity}</td>
                        <td>{d.hrating}</td>
                        <td>
                            <Link to={`/Hosupdate/${d.hid}`} className='btn btn-warning'>Update</Link>
                            &nbsp;
                            {/* <button onClick={(e) => handleSubmit(d.hid)} className='btn btn-danger'>Delete</button> */}
                            &nbsp;
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
    </div>
    </>
  )
}

export default Hosview
