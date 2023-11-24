import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import logo from "./logo.png"

const Header = () => {
const {totalCartQuantity}=useSelector((state=>state.Cart));
  return (
    <div className='flex p-1 justify-around items-center sticky top-0 z-10 bg-white' >
        <NavLink><img className='h-24 rounded-full' src={logo} alt='logo'/></NavLink>
 <div>
     <form className="bg-sky-100" >
      <input className='outline-none px-3 bg-sky-100' type="search"  placeholder="Search Products..." />
      <button className="p-2" >🔍</button>
     </form>
     </div>
      <CgProfile  className='text-4xl'/>
      <div>
      <NavLink to="/cart">
      <IoCartOutline className='text-4xl relative right-3' />
      <h1 className='absolute top-[1rem] text-xl'>{totalCartQuantity}</h1>
       </NavLink>
      </div>
      
    </div>
  )
}

export default Header