import './Login.css';
import axios from "axios";
// import { response } from "express";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

export default function Login(){
    const[userdetail,setUserdetails]=useState();
    const formik=useFormik({
        initialValues:{
            UserId:"",
            Password:"",  
        },
        onSubmit:values=>{
            console.log(userdetail);
            for(var userdetails of userdetail){
                console.log(userdetails.UserId);
                console.log(userdetails.Password);
                if(userdetails.UserId===values.UserId && userdetails.Password===values.Password){
                    alert(JSON.stringify(values));
                    break;
                }
                else{
                    document.write("User Detail not Found");
                    break;
                }

            }
        }
    });

    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/getusers")
        .then(values=>{setUserdetails(values.data)
        })
        .catch(err=>console.log(err));
       
    })
    return (
      <div className='login-container'> 
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
         
          <div className="User-Id">
            <label>UserId</label>
            <br />
            <input
              type="text"
              onChange={formik.handleChange}
              placeholder="Username"
              required
              className='UserInput'
              value={formik.values.UserId}
              name='UserId'
            ></input>
            <span className="bi bi-person"> </span>
          </div>
          <div className="Password" >
            <label>Password</label>
            <br />
            <input
            className='UserPassword'
              type="password"
              onChange={formik.handleChange}
              placeholder="Password"
              required
              value={formik.values.Password}
              name='Password'
            ></input>
            <span className="bi bi-key"> </span>
          </div>
          
          
          <label htmlFor="Remember" id='Remember'>
            <input type="checkbox"  />
            Remember Me
          </label>

        <span id='Forget-password'>
          <a href="#">Forget Password</a>
        </span>

          <div className='login-Button'>
          <button type="submit" className="btn btn-primary w-25">
            login
          </button>
          </div>
          <span className='Register'>Don't have Account Please Register <a href='#'>Register</a></span>
        </form>

      </div>
      </div>
      
    );//return end

}//end