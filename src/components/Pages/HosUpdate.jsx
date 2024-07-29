import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function HosUpdate() {
    const {id} = useParams();
    const [inputData, setInputData] = useState([]);
    const naviget = useNavigate();
  
    useEffect(() => {
      axios
        .get("http://localhost:1234/hospital/"+id)
        .then((res) => {
          setInputData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    let handleSubmit = (e) => {
      e.preventDefault();
        axios
          .put("http://localhost:1234/hospital", inputData)
          .then((res) => {
            alert("Hospital Updated Successfully");
            naviget("/Hosview");
          })
          .catch((err) => console.log(err));
      };
  return (
    <>
      <div id="viewall" className="d-flex w-100 vh-100 justify-content-center align-items-center ">
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
            <a href='/Hosview' className='btn btn-info'>Go Back</a>
            <h1 className='display-4'>Update Hospital Details</h1> <br />

            <div>
            <label htmlFor="pid">Hospital ID</label>
            <input disabled
              type="number"
              name="hid"
              className="form-control"
              value={inputData.hid}
              onChange={(e) =>
                setInputData({ ...inputData, hid: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="hname">Hospital Name</label>
            <input
              type="text"
              name="hname"
              className="form-control"
              value={inputData.hname}
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
              value={inputData.hcity}
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
              value={inputData.hrating}
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

export default HosUpdate
