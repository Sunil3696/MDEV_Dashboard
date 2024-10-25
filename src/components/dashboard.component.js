import React from "react";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./userprofile.widget";
import UserList from "./userList";
import WeatherWidget from "./weather.widget";
import Stocks from "./stock.widget";
import Quotes from "./quotes.widget";
import Calculator from "./Calculator";
import Checklist from "./Checklist";
import Sidebar from "./sidebar.component";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = async () => {
        try {
            await signOut(auth); // Firebase sign out
            navigate("/"); // Redirect to login page after logout
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="widgets">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
                <UserProfile />
                <UserList />
                <WeatherWidget />
                <Stocks />
                <Quotes />

                {/* Make these widgets span full row */}
                <Calculator className="bottom-widget" />
                <Checklist className="bottom-widget" />
            </div>
        </div>
    );
};

export default Dashboard;
