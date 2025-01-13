import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
         event.preventDefault()
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800 '>Subscribe now & 20% off </p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi ea, perspiciatis sit adipisci ut.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
        <input className='w-full sm:flex-1 outline-none ' required type="email"  placeholder='enter your email'/>
        <button className='bg-black text-white text-xs py-4 px-10' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox