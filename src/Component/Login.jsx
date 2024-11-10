import React, { useState } from 'react'
import style from '../Style/login.module.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const [email,setemail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.get(`http://localhost:8080/api/user/${email}/${pass}`)
        .then(e=>{
            console.log(e.data);
            
        })
        .catch(e=>{
            console.log("Invalid details");
            
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
    <span>or use your email and password</span>
    <input type="email" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='email'/>
    <input type="password" id="password" name="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='password'/>
    <a href="#">Forget your password</a>
    <button onClick={handleSubmit}>Log in</button>

   <span>I don't have an account<a href=''><Link to="/signin"> Sign up</Link></a></span>
   </div>
   </div>
  )
}

export default Login
