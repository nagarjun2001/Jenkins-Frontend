import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import logo from './UI/images/logo.png';
import { regapicall } from './Authentication/AuthService';

export default function Signin() {
    const navigate = useNavigate();
    const[inputData, setInputData] = useState({
      id : "",
      uname : "",
      fname : "",
      lname : "",
      email : "",
      password : ""
});

    let handleRegister = (e) => {
      e.preventDefault();
      // let result = validateValues(inputData);
      // if (result === true) {
        // const conf = window.confirm("Confirm the given details are correct? Once submitted cannot be undone!");
        axios
        .post("http://localhost:1234/register",inputData)
        .then((res) => {
          window.confirm("Registered Successfully");
          navigate("/Login");
        })
        // .catch((err) => {
        //   console.log(err);
        // })
    }

    // const validateValues = (inputData) => {
    //   if (inputData.uname.length === 0) {
    //     alert("Username is required !!! ");
    //     return false;
    //   } else if (inputData.fname.length === 0) {
    //     alert("First name is required !!! ");
    //     return false;
    //   } else if (inputData.lname === 0) {
    //       alert("Last name is required !!! ");
    //       return false;
    //   }else if (inputData.email.length === 0) {
    //       alert("Email ID is required !!! ");
    //       return false;
    //   }else if (inputData.phone.length != 10) {
    //       alert("Phone Number is required !!! ");
    //       return false;
    //   }else if (inputData.password.length != 10) {
    //     alert("Phone Number is required !!! ");
    //     return false;
    // }
    //   else {
    //     return true;
    //   }
    // };
    return (
      <>
        {/* <div className='container'>
          
            <button onClick={()=> navigate(-1)} type="button" class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </button>

        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm"> */}
            {/* <img
              className="mx-auto h-1 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            {/* <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up here
            </h2>
          </div>
  
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-1" onSubmit={handleRegister}>
              <div>
                <label htmlFor="Username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input id='uname'
                    name="uname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setInputData({...inputData, uname : e.target.value})
                    }
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="Firstname" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setInputData({...inputData, fname : e.target.value})
                    }
                  />
                </div>
              
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setInputData({...inputData, lname : e.target.value})
                    }
                  />
                </div>
              
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                  id='email'
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setInputData({...inputData, email : e.target.value})
                    }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                  id='password'
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setInputData({...inputData, password : e.target.value})
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"                >
                  Register
                </button>
              </div>
            </form>
  
          </div>
        </div> */}
        <div class="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div class="text-center mb-2">
        <a href="javascript:void(0)"><img
          src={logo} alt="logo" class='w-12 inline-block' />
        </a>
        <h4 class="text-gray-800 text-base font-semibold mt-6">Sign up into your account</h4>
      </div>

      <form onSubmit={handleRegister}>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Username</label>
            <input onChange={(e) =>
                      setInputData({...inputData, uname : e.target.value})
                    } name="uname" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="jacksparrow00" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">First Name</label>
            <input onChange={(e) =>
                      setInputData({...inputData, fname : e.target.value})
                    } name="fname" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Jack" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input onChange={(e) =>
                      setInputData({...inputData, lname : e.target.value})
                    } name="lname" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Sparrow" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input onChange={(e) =>
                      setInputData({...inputData, email : e.target.value})
                    } name="email" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="jacksparrow007@gmail.com" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Password</label>
            <input onChange={(e) =>
                      setInputData({...inputData, password : e.target.value})
                    } name="password" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          
        </div>

        <div class="!mt-11">
          <button id='regbtn' type="submit" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Register
          </button>
        </div>
      </form>
    </div>
      </>
    )
  }