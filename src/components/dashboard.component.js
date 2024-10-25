import React from "react";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./userprofile.widget";
import UserList from "./userList";
import WeatherWidget from "./weather.widget";
import Stocks from "./stock.widget";
import Quotes from "./quotes.widget";
import Calculator from "./Calculator";

const Dashboard = () => {
    const { currentUser } = useAuth();
return (
    <div className="dashboard">
    <h1>Dashboard</h1>
    <div className="widgets">
        <UserProfile />
      <UserList/>
      <WeatherWidget/>
      <Stocks/>
      <Quotes/>
      <Calculator/>
        {/* Add more widgets here, like news and cryptocurrency */}
    </div>
</div>
)
}

export default Dashboard