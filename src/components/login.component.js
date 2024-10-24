import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
import { useAuth } from "../context/AuthContext";

let defaultData = {
    email: "",
    password: ""
}
const Login = () => {

let [data, setData] = useState(defaultData);
let [error, setError] = useState(defaultData);
let [merror, setMError] = useState("");
const [loading,setLoading] = useState(false)
const { currentUser } = useAuth();
const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, name, type } = event.target;

       setData((preState) => {
        data = {
            ...preState,
            [name] : value
        }
        validateInputs(name)
        return data
       })
    }


    const validateInputs = (field) => {
        let message = "";
        switch (field) {
            case 'email':
                message = data['email'] ? (data['email'].includes('@') ? '' : "invalid email format") : "Email Field is required"
                break;

            case "password":
                message = data['password'] ? data['password'].length < 8 ? 'password must be minimum 8 char' : '' : "Password is required"
                break;
        }

        setError((prevState) => {
            error = {
                ...prevState,
                [field]: message
            }
            return error;
        })
    }

// console.log(data.password)

const handleSubmit = async(event) => {
    const {email, password} = data
    // console.log(email)
event.preventDefault();
setLoading(true);

    try{
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/dashboard')
    }catch(err) {
        setMError("Invalid Login Credentials")
    }finally{
        setLoading(false)
    }
}

if (currentUser) {
    navigate("/dashboard");
  }


    return (
<div className="login-container">
      <h2>Login</h2>
      <form  className="login-form" onSubmit={handleSubmit}>
      <p className="fieldError">{merror}</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
         onChange={handleChange}
        />
        <p className="fieldError">{error?.email}</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
         />
         <p className="fieldError">{error?.password}</p>
        <button type="submit">
        {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
    );
}

export default Login
