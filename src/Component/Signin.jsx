import React, { useState } from 'react'
import style from '../Style/login.module.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const [data,setData]=useState({
        username:'',
        email:'',
        number:'',
        password:''
    });

    const navigate=useNavigate()

    const handleChange=(e)=>{
           const {name,value} = e.target;
           setData({...data,[name]:value});
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(typeof data.number);
       
    axios.post(`http://localhost:8080/api/users`,data)
    .then(e => {
        console.log("sent successfully");
        navigate("/")
    })
    .catch(e=>{
        console.log("failed");
        
    })
          
    }


  return (
    <div className={style.main}>
    <div className={style.container}>
    <h1>Create Account</h1>
    <div className={style.social_media}>
    <a href="#"><i class="fa-brands fa-google"></i>
    </a>
    <a href="#"><i class="fa-brands fa-facebook-f"></i>
    </a>
    <a href="#"><i class="fa-brands fa-github"></i>
    </a>
    <a href="#"><i class="fa-brands fa-linkedin-in"></i>
    </a>
    </div>
    <span>or use your email for registration</span>
    <input type="text" id="username" name="username" value={setData.username} onChange={handleChange} placeholder='username' required/>
    <input type="email" id="email" name="email" value={setData.email} onChange={handleChange} placeholder='email' required/>
    <input type="number" id="mobile" name="number" value={setData.number} onChange={handleChange} placeholder='mobile' required/>
    <input type="password" id="password" name="password" value={setData.password} onChange={handleChange} placeholder='password' required/>
    <button onClick={handleSubmit}>Sign in</button>

   <span>I already have an account<a href="#"><Link to="/login"> Log in</Link> </a></span>
   
</div>
</div>
  )
}

export default Signin
