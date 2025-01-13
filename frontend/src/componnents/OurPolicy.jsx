import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-gray-700'>
      <div className="">
        <img className='w-12 m-auto mb-5 ' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>We offer hasle free exchange policy</p>
      </div>
      <div className="">
        <img className='w-12 m-auto mb-5 ' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>7 Days return policy</p>
        <p className='text-gray-400'>we provide 7 days free return policy</p>
      </div>
      <div className="">
        <img className='w-12 m-auto mb-5 ' src={assets.support_img} alt="" />
        <p className='font-semibold'>beast customer suport</p>
        <p className='text-gray-400'>we provide 24/7 customer suport</p>
      </div>
    </div>
  )
}

export default OurPolicy
