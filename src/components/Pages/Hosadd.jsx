import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Docview.css';

function Hosadd() {
    const[inputData,setInputData] = useState([]);
    const navigate = useNavigate();

    let handleSubmit = ((e) => {
        axios
            .post("http://localhost:1234/hospital",inputData)
            .then((res) => {
                alert("Hospital Added Successfully!");
                navigate("/Hosview");
            })
            .catch((err) => console.log(err));
    });
  return (
    <>
      <div id="viewall" className="d-flex w-100 vh-100 justify-content-center align-items-center ">
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
                <a href='/Hosview' className='btn btn-info'>Go Back</a>
            <h1 className='display-4'>Add Hospital Details</h1> <br />
          <div>
            <label htmlFor="basic">Hospital Name</label>
            <input
              type="text"
              name="hname"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, hname: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="hcity">City</label>
            <input
              type="text"
              name="hcity"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, hcity: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="hrating">Rating</label>
            <input
              type="number"
              name="hrating"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, hrating: e.target.value })
              }
            />
          </div>

          <br />
          <button className="btn btn-info ">Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Hosadd
