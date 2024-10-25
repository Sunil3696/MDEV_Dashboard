import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css"; // Optional: If you want to add CSS for the sidebar

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/stocks">Stocks</Link></li>
                <li><Link to="/quotes">Quotes</Link></li>
                {/* Add more links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
