import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
import { doc, setDoc } from "firebase/firestore";


let defaultData = {
    email: "",
    password: "",
    gender : "",
    age : "",
    username : ""
}
const Register = () => {

let [data, setData] = useState(defaultData);
let [error, setError] = useState(defaultData);
let [merror, setMError] = useState("");
const [loading,setLoading] = useState(false)
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


const handleSubmit = async(event) => {
event.preventDefault();
const {email, password, gender, age, username} = data

if(!email || !password || !gender || !age || !username){
    setMError("All fields are required");
    return;
}
setLoading(true);

try{
    const  userCredential = await createUserWithEmailAndPassword(auth, email , password);
     await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        username,
        age,
        gender
     });
     navigate("/");
}catch(err) {
    setMError("Failed to register. Please try again.");
}finally{
    setLoading(false)
}
    
}

// console.log(data)

    return (
<div className="login-container">
      <h2>Register</h2>
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
          <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
         />
          <input
          type="number"
          placeholder="Enter your age"
          name="age"
          onChange={handleChange}
         />
         <select
         name = "gender"
         onChange={handleChange}
          placeholder="Gender">
             
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">
        {loading ? "Logging in..." : "Register"}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
    );
}

export default Register
