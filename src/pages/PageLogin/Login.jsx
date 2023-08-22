import React, {   useContext, useEffect, useState } from "react";
import logo from '../../assets/images/63e86ab4c21faa7bc0bd90dd_Logo.svg';
import Button from '../../components/button/Button';
import { Link } from "react-router-dom";
import LoginContext from "../../components/context/LoginContext";


function Login(){
		const{loginUser, setLoginUser}=useContext(LoginContext)  

	const[user, setUser]=useState('')

	const handleClick=(e)=>{
		e.preventDefault()
		if(user==='test'){
			setLoginUser(true) 
		}
		else(
			alert('از کلمه تست برای ورود استفاده کنید')
		)
		
		
	}

   
    return(
        <div className="login-container" >
        <input type="radio" name="optionScreen" id="SignUp" className="SignUp" hidden></input>
		<input type="radio" name="optionScreen" id="SignIn" className="SignIn" hidden checked></input>
		{
			loginUser ?
			(
			<div className="welcome" >
			<p>خوش آمدید</p>
			<Link to='/'><Button buttonStyle={'btn--primary'} >خانه</Button></Link>
			</div>
			)
			:
			(
				<section >
			   <div className="logo">
				   <img src={logo} alt='shopcart' ></img>
			   </div>
   
		   <nav>
			   <label htmlFor="SignIn">ورود</label>
			   <label htmlFor="SignUp">ثبت نام</label>
		   </nav>
   
		   <form action="" id="SignInFormData">
			   <input type="text" id="username" placeholder="نام کاربری"  ></input>
			   <input type="password"  placeholder="رمز عبور" onChange={(e) => setUser(e.target.value)} ></input>
			   <Button buttonStyle='btn-primary'  onClick={(e)=> handleClick(e)} >ورود</Button>
			   <p> را وارد کنید  <span>test</span>  لطفا برای ورود کلمه </p>
		   </form>
   
		   <form action="" id="SignUpFormData">
			   <input type="text" id="name" placeholder="نام کاربری"></input>
			   <input type="email" id='email' placeholder="E-mail"></input>
			   <input type="password"  placeholder="رمز عبور"></input>
			   <Button buttonStyle='btn-primary'>ثبت نام</Button>
		   </form>
		   </section>
		   )
		}
		
		
        </div>
		
		
    )
}

export default Login;



