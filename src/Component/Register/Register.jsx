import './Register.css';
import NamasteImage from './Namaste.png'; 
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Register(){
    const [userdetail,setUserdetail]=useState();
    const formik=useFormik({
        initialValues:{
            UserId:"",
            UserName:"",
            Password:"",
            Age:0,
            Mobile:"",
            Gmail:""
        },
        onSubmit:values=>{
            axios({
                method:"POST",
                url:"http://127.0.0.1:4000/setusers",
                data:values
            })
            alert("Register Succefully");
            // Navigate("/login");
        },
        validate:ValidateForm,
    })
    function ValidateForm(userDetail){
        const error={};
        if(userDetail.UserId===userdetail.UserId){
            error.UserId("User Name Taken");
            
        }
        if(userDetail.UserId==''){
            error.UserId("User Id Required");
            
        }
        else{
            if((userDetail.UserId.lenght)<=4){
                error.UserId("User Id To Short")
            }
        }
        if(userDetail.UserName===userdetail.UserName){
            error.UserName("User Name Taken Try Another")
        }
        if(userDetail.UserName==''){
            error.UserId("User Name Required");
        }
        else{
            if((userDetail.UserName.lenght)<=4){
                error.UserId("User Name To Short")
            }
        }
        if((userDetail.Password.lenght<8)){
            error.Password("password too short");
        }
        if(userDetail.Age===0){
            error.Age("Age must greater than 1")
        }
        if(userDetail.Gmail===""){
            error.Gmail("gmail required")
        }
        else{
            if((userDetail.Gmail.inderOf('@')<4)){
                error.Gmail("Invalid Email ID")
            }
        }
        if(userDetail.Mobile===userdetail.Mobile){
            error.Mobile("Number Taken Try Another");
        }
        const mobileNumberRegex = /^[6-9]\d{9}$/;
        if(userDetail.Mobile.match(mobileNumberRegex)){
            error.Mobile("");
        }
        else{
            error.Mobile("Please Enter Valid Mobile No")
        }
        return error;

    }
    useEffect(()=>{
        axios.get('http://127.0.0.1:4000/getusers')
        .then(response=>setUserdetail(response.data))
        .catch((ex)=>console.log(ex))
    })
    return(
        <div className='container'>
            <div className='WelcomeIcon'> 
                <div>
                <img src={NamasteImage} alt='Loading Error' width='400' height='500'></img>
                </div>
                <div style={{fontFamily:'Protest Riot,san-serif',fontSize:'150px'}}>
                    Namaste
                </div>
                 
            </div>
            <div className='RegisterPage'>
                <h2>Register User</h2>
                <div className='register'>
                    <form onSubmit={formik.handleSubmit} className='form form-check'>
                       <dt>User-ID</dt>
                       <dd><input type="text" name="UserId" value={formik.values.UserId} onChange={formik.handleChange}></input></dd>
                       <dt>User Name</dt>
                       <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange}></input></dd>
                       <dt>Password</dt>
                       <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange}></input></dd>
                       <dt>Age</dt>
                       <dd><input type="number" name="Age" value={formik.values.Age} onChange={formik.handleChange}></input></dd>
                       <dt>Mobile</dt>
                       <dd><input type="text" name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange}></input></dd>
                       <dt>Gmail</dt>
                       <dd><input type="text" name="Gmail" value={formik.values.Gmail} onChange={formik.handleChange}></input></dd>
                       <button className='btn btn-primary w-50 p-1'>Register</button>
                       <dd>
                        <span><p style={{fontFamily:'Protest Riot'}}>Already have a Account</p>  </span>
                       <span><a href='#'>Login</a></span>
                       </dd>

                    </form>

                </div>
                
                
            </div>

        </div>
    )
}