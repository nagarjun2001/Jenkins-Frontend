import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Docview.css';

function Docupdate() {
    const {id} = useParams();
    const [idlist, setidlist] = useState([]);
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
        .get("http://localhost:1234/doctor/"+id)
        .then((res) => {
          setInputData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
        axios
          .get("http://localhost:1234/hospital/all")
          .then((res) => {
            setidlist(res.data);
          })
          .catch((err) => console.log(err));
      }, []);
  
  
    let handleidchange = (e) => {
      const selectedRecordId = e.target.value;
      console.log(selectedRecordId);
      if (selectedRecordId) {
        axios
          .get("http://localhost:1234/hospital/" + selectedRecordId)
          .then((response) => {
            console.log(response.data);
            setInputData({ ...inputData, hospital: response.data });
  
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  
    let handleSubmit = (e) => {
      e.preventDefault();
      let result = validateValues(inputData);
      if (result === true) {
        console.log(inputData)
        axios
          .put("http://localhost:1234/doctor", inputData)
          .then((res) => {
            alert("Doctor Updated Successfully");
            naviget("/DocView");
          })
          .catch((err) => console.log(err));
      } else {
        alert("Please Enter Valid Inputs!!!");
      }
    };
  
    const validateValues = (inputData) => {
        if (inputData.dname.length === 0) {
            alert("Doctor Name should not be empty !!!");
            return false;
          } else if (inputData.dexperience.length === 0) {
            alert("Please enter Years of Experience!!!");
            return false;
          }
          else if (inputData.dspecial.length === 0) {
              alert("Please enter Specialization !!!");
              return false;
            }
      else {
        return true;
      }
    };
  return (
    <>
    <div
      id="viewall"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
        <a href='/DocView' className='btn btn-info'>Go Back</a>
          <h1 className='display-4'>Update Doctor Details</h1><br></br>
          <div>
            <label htmlFor="did">Doctor ID</label>
            <input
              disabled
              readOnly
              type="text"
              name="did"
              className="form-control"
              value={inputData.did}
              onChange={(e) =>
                setInputData({ ...inputData, did: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="ename">Doctor Name</label>
            <input
              type="text"
              name="dname"
              className="form-control"
              value={inputData.dname}
              onChange={(e) =>
                setInputData({ ...inputData, dname: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="Department">Years of Experience</label>
            <input
              type="text"
              name="dexperience"
              className="form-control"
              value={inputData.dexperience}
              onChange={(e) =>
                setInputData({ ...inputData, dexperience: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="hid">Hospital Branch ID</label> &nbsp;
            <select className="form-control" name="hid" required title="Select Hospital Branch ID" onChange={handleidchange}>
              <option name="pid">Select Hospital Branch ID</option>
              {idlist.map((d, i) => (
                <option selected value={i.hid}>
                  {d.hid}
                </option>
              ))}
            </select>
          </div>
          <br />

          <button id='updbtn' className="btn btn-info ">Submit</button>
        </form>


      </div>
    </div>
    </>
  )
}

export default Docupdate
