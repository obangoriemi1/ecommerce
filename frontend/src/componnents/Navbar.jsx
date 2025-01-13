import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  
    const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between font-medium py-5'>
      <img className='w-36' src={assets.logo}/>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1 ">
         <p>Home</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-1 ">
         <p>Collection</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1 ">
         <p>About</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1 ">
         <p>Contact</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
        <div className="group relative">
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
                <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded ">
                    <p className='cursor-pointer hover:text-black'>m profile</p>
                    <p className='cursor-pointer hover:text-black'>orders</p>
                    <p className='cursor-pointer hover:text-black'>logout</p>
                </div>
            </div>
        </div>
       <Link to='/card' className='relative'>
       <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
       <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
       </Link>
       <img onClick={() =>setVisible(true)} className='w-5 cursor-pointer sm:hidden ' src={assets.menu_icon} alt="" />
      </div>
      {/* sidebare menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={() =>setVisible(false)} className="flex items-center cursor-pointer gap-4 p-3">
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={() =>setVisible(false)} className={"py-2 pl-6 border"} to="/">
                   Home
            </NavLink>
            <NavLink onClick={() =>setVisible(false)} className={"py-2 pl-6 border"} to="/collection">
                   Collection
            </NavLink>
            <NavLink onClick={() =>setVisible(false)} className={"py-2 pl-6 border"} to="/about">
                   About
            </NavLink>
            <NavLink onClick={() =>setVisible(false)} className={"py-2 pl-6 border"} to="/contact">
                   Contact
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar