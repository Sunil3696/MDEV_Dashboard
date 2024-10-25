import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
 
const Sidebar = ({ handleLogout }) => {  //used props to handle logout here
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/stocknews">Stocks</Link></li>
            </ul>
            <button className="logout-button" onClick={handleLogout}>Logout</button> 
        </div>
    );
};

export default Sidebar;
