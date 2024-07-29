import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function DocDetails() {
    const {id} = useParams();
    const [inputData, setInputData] = useState({
        did: "-1",
        dname: "",
        dexperience:"",
        dspecial: "",
        hospital:
        {
          hid: "",
          hname: "",
          hcity: "",
          hrating: ""
        }
    });
    const naviget = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:1234/doctor/" + id)
            .then((response) => setInputData(response.data)
            )
            .catch((err) => {
                console.log(err)
            });
    }, []);


  return (
    <>
    <div style={{height:"650px",backgroundImage: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)"}}>
        <div className='container'> <br />
        <a href='/DocView' className='btn btn-info'>Go Back</a>
            <div className='d-flex align-items-center justify-content-center mt-2'>
            <h1 className='display-1 text-center'>Doctor Full Detail</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
            <table className='table table-dark table-bordered table-hover table-striped w-100'>
                <thead>
                    <tr align="center">
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
                        <th>Years of Experience</th>
                        <th>Specialization</th>
                        <th>Hospital Branch ID</th>
                        <th>Hospital Name</th>
                        <th>City</th>
                        <th>Hospital Rating</th>
                    </tr>
                </thead>
                <tbody>
                   
                        <tr align="center">
                            <td>{inputData.did}</td>
                            <td>{inputData.dname}</td>
                            <td>{inputData.dexperience}</td>
                            <td>{inputData.dspecial}</td>
                            <td>{inputData.hospital.hid}</td>
                            <td>{inputData.hospital.hname}</td>
                            <td>{inputData.hospital.hcity}</td>
                            <td>{inputData.hospital.hrating}</td>
                        </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    </>
  )
}

export default DocDetails
