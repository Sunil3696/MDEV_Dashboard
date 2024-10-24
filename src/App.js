import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Login from "./components/login.component"
import Dashboard from './components/dashboard.component';
import Register from './components/register.component';


const App= () => {
  return (
    <Router>
        <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
 
        </Routes>
        </Router>
  );
}

export default App;
