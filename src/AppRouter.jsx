import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Hosview from './components/Pages/Hosview';
import Docadd from './components/Pages/Docadd';
import Docupdate from './components/Pages/Docupdate';
import DocDetails from './components/Pages/DocDetails';
import Hosadd from './components/Pages/Hosadd';
import HosUpdate from './components/Pages/HosUpdate';
import Login from './components/Login';
import DocView from './components/Pages/DocView';

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/Signup' element={<Signin />} />
            <Route path='/Login' element={<Login />} />

            <Route path='/DocView' element={<DocView />} />
            <Route path='/Docadd' element={<Docadd />} />
            <Route path='/docupdate/:id' element={<Docupdate />} />
            <Route path='/docfulldetail/:id' element={<DocDetails />}/>

            <Route path='/Hosview' element={<Hosview />} />
            <Route path="/Hosadd" element={<Hosadd />} />
            <Route path='/HosUpdate/:id' element={<HosUpdate />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
