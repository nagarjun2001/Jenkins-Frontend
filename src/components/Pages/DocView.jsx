import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Docview.css';

function DocView() {
    const [columns, setcolumns] = useState([]);
    const [records, setrecords] = useState([]);
    const [find,setFind] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:1234/doctor/all")
            .then((response) => {
                setcolumns(Object.keys(response.data[0]));
                setrecords(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
}, []);

    let handleSubmit = (did) => {
        const conf = window.confirm("Do you want to delete?");
        if(conf){
            axios
                .delete("http://localhost:1234/doctor/"+did)
                .then((res) => {
                    alert("Record Deleted Successfully!");
                    navigate("/DocView");
                    window.location.reload();
                })
                .catch((err) => console.log(err));
        }
    };

    
  return (
    <>
        {/* <div style={{height:"650px",backgroundImage: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)"}}> */}
        {/* <div className='container' >
        <br />
        <a href='/' className='btn btn-info'>Home</a>
                <h1 className='display-1 text-center' style={{color:"Black"}}>Doctor Details</h1>

            <div className="text-end">
                <Link to="/Docadd" className="btn btn-info">
                    + Add Doctor
                </Link>
            </div>

            <br />

            <table className="table table-bordered table-hover  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr align="center">
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Years of Experience</th>
                <th>Specialization</th>
                <th>Hospital ID</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
                {records.map((d,i) => (
                    <tr key={i} align="center">
                        <td>{d.did}</td>
                        <td>{d.dname}</td>
                        <td>{d.dexperience}</td>
                        <td>{d.dspecial}</td>
                        <td>{d.hospital.hid}</td>
                        <td>
                            <Link to={`/docupdate/${d.did}`} className='btn btn-warning'>Update</Link>
                            &nbsp;
                            <button onClick={(e) => handleSubmit(d.did)} className='btn btn-danger'>Delete</button>
                            &nbsp;
                            <Link to={`/docfulldetail/${d.did}`} className='btn btn-warning'>Doctor Full Details</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div> */}
    <div className='container'>
        <a href='/' className='btn btn-info'>Home</a>
                <h1 className='display-1 text-center' style={{color:"Black"}}>Doctor Details</h1>

            <div className="text-end">
                <Link to="/Docadd"id='addDoc' className="btn btn-info">
                    + Add Doctor
                </Link>
            </div>

            <br />
        <div class="font-sans overflow-x-auto">
      <table class="min-w-full bg-white table-bordered">
        <thead class="bg-gray-200 whitespace-nowrap">
          <tr>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
            Doctor ID
            </th>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
              Doctor Name
            </th>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
                Years of Experience
            </th>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
                Specialization
            </th>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
                Hospital ID
            </th>
            <th class="p-4 text-center text-xs font-semibold text-gray-800">
                Actions
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
                {records.map((d,i) => (
                    <tr class="hover:bg-gray-50" key={i} align="center">
                        <td class="p-4 text-[15px] text-gray-800">{d.did}</td>
                        <td class="p-4 text-[15px] text-gray-800">{d.dname}</td>
                        <td class="p-4 text-[15px] text-gray-800">{d.dexperience}</td>
                        <td class="p-4 text-[15px] text-gray-800">{d.dspecial}</td>
                        <td class="p-4 text-[15px] text-gray-800">{d.hospital.hid}</td>
                        <td class="p-4">
                            <Link to={`/docupdate/${d.did}`}>
                                <button  class="mr-4" title="Update" name={`update${d.did}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                                    viewBox="0 0 348.882 348.882">
                                    <path
                                        d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                        data-original="#000000" />
                                    <path
                                        d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                        data-original="#000000" />
                                    </svg>
                                </button>
                            </Link>

                            
                                <button class="mr-4" onClick={(e) => handleSubmit(d.did)} title="Delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000" />
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000" />
                                    </svg>
                                </button>
                            <Link to={`/docfulldetail/${d.did}`}>
                                <button>
                                    <img src="https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_1280.png" title='More Details' width={20} />
                                </button>
                            </Link>
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

export default DocView
