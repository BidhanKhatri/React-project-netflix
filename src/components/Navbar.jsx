import React, { useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import SearchIcon from '../assets/search_icon.svg';
import BellIcon from '../assets/bell_icon.svg';
import ProfileIcon from '../assets/profile_img.png';
import ArrowDown from '../assets/caret_icon.svg';
import { Link } from 'react-router-dom';

function Navbar() {

  const navRef = useRef();
  
  useEffect(()=>{

   window.addEventListener("scroll",()=>{

    if(window.scrollY >= 80){
      navRef.current.classList.add("nav-dark");
     }else{
      navRef.current.classList.remove("nav-dark");
     }

   })
   
  },[])

  const handleLogOut = () =>{
    localStorage.removeItem("loginStatus");
  }

  return (
    <nav ref={navRef} className='fixed w-full flex justify-between items-center px-10 py-4 z-30'>

      <div className='flex space-x-8'>
        <img src={Logo} alt="logo" className='w-24 cursor-pointer' />
        <ul className='flex items-center space-x-6 '>
          <li className='cursor-pointer hover:text-white/80'>Home</li>
          <li className='cursor-pointer hover:text-white/80'>TV Shows</li>
          <li className='cursor-pointer hover:text-white/80'>Movies</li>
          <li className='cursor-pointer hover:text-white/80'>New & Popular</li>
          <li className='cursor-pointer hover:text-white/80'>My List</li>
          <li className='cursor-pointer hover:text-white/80'>Browse by Languages</li>
        </ul>
      </div>

      <div className='flex items-center space-x-6'>
          <img src={SearchIcon} alt='search' className='cursor-pointer' />
          <p>Children</p>
          <img src={BellIcon} alt='bell' className='cursor-pointer' />

          <div className='profile-div relative flex space-x-1 cursor-pointer'>
            <img src={ProfileIcon} alt='profile' />
            <img src ={ArrowDown} alt='down' />
            <div className='drop-down absolute hidden top-[100%] right-[0%] bg-[#242424] w-max py-2 px-4 rounded'>
                <Link to='/login' onClick={handleLogOut} className='text-sm hover:text-white/90'>Logout Of NetFlix</Link>
            </div>
          </div>
      </div>

    </nav>
  )
}

export default Navbar
