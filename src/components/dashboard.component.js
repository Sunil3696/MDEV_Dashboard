import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { currentUser } = useAuth();
return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser ? currentUser.email : "User"}!</p>
      <p>This is your dashboard.</p>
    </div>
)
}

export default Dashboard