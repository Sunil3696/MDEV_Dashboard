import React from "react";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";
const Dashboard = () => {
    const { currentUser } = useAuth();
return (
    <div className="dashboard">
    <h1>Dashboard</h1>
    <div className="widgets">
        <UserProfile />
      
        {/* Add more widgets here, like news and cryptocurrency */}
    </div>
</div>
)
}

export default Dashboard