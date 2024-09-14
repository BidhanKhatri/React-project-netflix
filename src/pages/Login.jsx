import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const[value,setValue] = useState("Login");

  const navigate = useNavigate();

  const[input,setInput] = useState({
    name:"",
    email:"",
    password:""
  });


  const preventDefault = (e) =>{

    e.preventDefault();
    const gotData = JSON.parse(localStorage.getItem("user"));

    if(input.email === gotData.email && input.password === gotData.password){
        localStorage.setItem("loginStatus",true);
        navigate('/');
    }else{
        alert("Email Or Password Is Wrong");
    }
    

  }

  // localStorage.setItem("user", JSON.stringify(input));
  

  return (
    <div className='login-bg'>
      
      <img src={Logo} alt='' className='h-8'/>

      <div className='bg-[rgba(0,0,0,.75)] max-w-sm mx-auto rounded mt-10 p-10 space-y-8 '>

        <h1 className='font-semibold text-3xl'>{value}</h1>

        <form onSubmit={preventDefault} className='flex flex-col space-y-6'>
          {value === "Signup" ? <input 
          
          name="name" 
          onChange={(e)=>{ setInput({

            ...input,
            [e.target.name] : e.target.value

          }) }} 
          type='text' placeholder="Your name" className='rounded p-2 outline-none bg-[#242424] text-white/80' /> : <></> }

          <input 
          name="email" 
          onChange={(e)=>{ setInput({

            ...input,
            [e.target.name] : e.target.value

          }) }} 
          type='email' placeholder="Email" className='rounded p-2 outline-none bg-[#242424] text-white/80' />

          <input 
          name="password"

          onChange={(e)=>{
            setInput({

              ...input,
              [e.target.name]: e.target.value

            })
          }}
          
          type='password' placeholder="Password" className='rounded p-2 outline-none bg-[#242424] text-white/80' />

          <button className='bg-red-600 py-2 rounded'>
            {value}
          </button>
          <div className='flex justify-between items-center'>
            <div>
              <input type='checkbox' id='check-box'/>
              <label htmlFor='check-box' className='cursor-pointer'> Remember Me</label>
            </div>
            <p className='cursor-pointer'>Need help?</p>
          </div>
          
          {/* <div>
            {value === "Login" ? <p className='text-white/70'>New to Netflix? <span className='font-bold text-white cursor-pointer ml-2' onClick={()=>setValue("Signup")}> SignUp Now</span></p> : <></> }
            {value === "Signup" ? <p className='text-white/70'>Already have account?<span className='font-bold text-white cursor-pointer ml-2' onClick={()=> setValue("Login")}> Login Now</span> </p> : <></> }
          </div> */}

          <div>
           <Link to='/signup' className='text-white/70'>New to Netflix? <span className='font-bold text-white cursor-pointer ml-2' >Signup Now</span> </Link> 
          </div>

        </form>
      </div>
      
    </div>
  )
}

export default Login
