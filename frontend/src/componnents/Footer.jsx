import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (

    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatum voluptate at possimus sint alias!
            Accusamus voluptatum voluptate at possimus sint alias!
            </p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5 '>Company</p>

            <ul className='flex flex-col text-gray-600'>
               <li>Home</li>
               <li>About Us</li>
               <li>Delivery</li>
               <li>Privacy policy</li>
            </ul>
        </div>

        <div className="">
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600'>
              <li>+254756438906</li>
              <li>Contactforever@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr />
         <p className='py-5 text-sm text-center '>Copyright 2025 @ forver.com - all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
