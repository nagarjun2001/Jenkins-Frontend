import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './Docview.css';

function Docadd() {
  // let history = useHistory();
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
        .post("http://localhost:1234/doctor", inputData)
        .then((res) => {
          alert("Doctor added Successfully");
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
      <div className="w-50 border p-5">
      <div>
      <button className='btn btn-info' onClick={() => naviget(-1)}>Go Back</button>
        </div>
        <form onSubmit={handleSubmit}>
        {/* <a href='/DocView' className='btn btn-info'>Go Back</a> */}
          <h1 className='display-4' role='addtit'>Add Doctor</h1><br />
          <div>
            <label role='docname' htmlFor="dname">Doctor Name</label>
            <input role='dnameinp'
              type="text"
              name="dname"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, dname: e.target.value })
              }
            />
          </div>
          <div>
            <label role='yoe' htmlFor="experience">Years of Experience</label>
            <input role='yoeinp'
              type="text"
              name="dexperience"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, dexperience: e.target.value })
              }
            />
          </div>
          <div>
            <label role='spl' htmlFor="special">Specialization</label>
            <input role='splinp'
              type="text"
              name="dspecial"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, dspecial: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="hid">Hospital Branch ID</label> &nbsp;
            <select className="form-control" name="hid" required title="Select Hospital ID" onChange={handleidchange}>
              <option name="pid" selected="selected">Select Hospital Branch ID</option>
              {idlist.map((d, i) => (
                <option value={d.hid}>
                  {d.hid}
                </option>
              ))}
            </select>
          </div>
          <br />

          <button id='btn' className="btn btn-info ">Submit</button>
        </form>


      </div>
    </div>
    </>
  )
}

export default Docadd
