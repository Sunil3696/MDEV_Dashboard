import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";

import Login from "./components/login.component"
import Dashboard from './components/dashboard.component';
import Register from './components/register.component';
import DetailWeather from './pages/detailWeather';
import DetailsStocknews from './pages/DetailsStocknews';
const App= () => {
  return (
    <AuthProvider>
    <Router>
        <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/weather' element={<DetailWeather/>}/>
    <Route path='/stocknews' element={<DetailsStocknews/>}/>

        </Routes>
        </Router>
        </AuthProvider>
  );
}

export default App;
