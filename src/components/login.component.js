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


    return (
<div className="login-container">
      <h2>Login</h2>
      <form  className="login-form">
        <input
          type="email"
          placeholder="Email"
          name="email"
         onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
         />
        <button type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
    );
}

export default Login
