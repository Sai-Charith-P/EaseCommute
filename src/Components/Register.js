import React,{ useState,useEffect} from "react"
import axios from "axios"
import google from "./images/google.webp"
import logo from "./images/Logo.webp"
import { useNavigate } from "react-router-dom"
const Register=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const [mobileNumber,setNumber]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const navigate=useNavigate()
    const handleSignUp=async (event)=>{
        event.preventDefault()
        if (password!=confirmPassword){
            return alert("Password and Confirm Password does not match")
        }
        try{
            const res=await axios.post("http://localhost:9000/api/auth/signup",{username,mobileNumber,email,password,confirmPassword})
            console.log(res)
            console.log("SignUp successful")
        }
        catch(err){
            console.log("SignUp Failed",err)
        }
        navigate('/login')   
    }
    const handleGoogle=()=>{
    
    }
    return (
    <div className="Form">
        <div className="navbar">
            <img src={logo}></img>
        </div>
        <form onSubmit={handleSignUp}>
            <div className="top">
                <input type="text" required="true" placeholder="Username" onChange={(e)=>{
                setUsername(e.target.value)
                }}>
                </input>
                <input type="text" required="true" placeholder="Mobile Number" minLength="10" onChange={(e)=>{
                setNumber(e.target.value)
                }}>
                </input>
                <input type="email" required="true" placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
                }}>
                </input>
                <input type="password" required="true" minLength="8" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value)
                }}></input>
                <input type="password" required="true" minLength="8" placeholder="Confirm Password" onChange={(e)=>{
                setConfirmPassword(e.target.value)
                }}></input>
                <button type="submit">SignUp</button>
            </div>
            <div className="bottom">
                    <button className="button" onClick={handleGoogle}><img src={google}></img><p>Google</p></button>
            </div>
        </form>
    </div>
    
    )
}
export default Register