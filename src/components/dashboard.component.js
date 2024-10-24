import React from "react";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";
import UserList from "./userList";
import WeatherWidget from "./WeatherWidget";
const Dashboard = () => {
    const { currentUser } = useAuth();
return (
    <div className="dashboard">
    <h1>Dashboard</h1>
    <div className="widgets">
        <UserProfile />
      <UserList/>
      <WeatherWidget/>
        {/* Add more widgets here, like news and cryptocurrency */}
    </div>
</div>
)
}

export default Dashboard