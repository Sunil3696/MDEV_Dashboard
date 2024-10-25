import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar.component";
import UserProfile from "./userprofile.widget";
import UserList from "./userList";
import WeatherWidget from "./weather.widget";
import Quotes from "./quotes.widget";
import Calculator from "./Calculator";
import Checklist from "./Checklist";
import StocksNews from "./stock.widget";
import { auth } from "../firebase/firebase";
import "../styles/dashboard.css";



const Dashboard = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [sidebarVisible, setSidebarVisible] = useState(false);



    //useeffect to check if the user is already logged in or not
useEffect(()=> {
    if (!currentUser) {
        navigate("/");
        return
      }
},[currentUser])
   


//Handling logout function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="dashboard">
            {/* Toggle Button */}
            <button className={`sidebar-toggle ${sidebarVisible ? 'cross' : ''}`} onClick={toggleSidebar}>
                {sidebarVisible ? "✖" : "≡"} 
            </button>
            <h1 className="dashboard-title">Dashboard</h1>
            
            {/* visible class when sidebarVisible is true */}
            <div className={sidebarVisible ? "visible" : "hidden"}>
                <Sidebar handleLogout={handleLogout} />
                {/* Move toggle button inside sidebar */}
                <button className="sidebar-toggle cross" onClick={toggleSidebar}>
                    ✖
                </button>
            </div>

            <div className="widgets">
                <UserProfile />
                <UserList />
                <WeatherWidget />
                <Quotes />
                <Calculator className="bottom-widget" />
                <Checklist className="bottom-widget" />
            </div>

            <div className="full-width-widget-container">
                <StocksNews className="full-width-widget" />
            </div>
        </div>
    );
};

export default Dashboard;
