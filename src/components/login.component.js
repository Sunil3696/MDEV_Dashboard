import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase";
import "../styles/login.css"


let defaultData = {
    email: "",
    password: ""
}
const Login = () => {

let [data, setData] = useState(defaultData);
let [error, setError] = useState(defaultData);
const [loading,setLoading] = useState(false)


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

// console.log(error)
const handleSubmit = (event) => {
event.preventDefault();
}


    return (
<div className="login-container">
      <h2>Login</h2>
      <form  className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
         onChange={handleChange}
        />
        <p class="fieldError">{error?.email}</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
         />
         <p class="fieldError">{error?.password}</p>
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
