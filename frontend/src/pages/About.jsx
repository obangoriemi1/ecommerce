import React from 'react'
import Title from '../componnents/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../componnents/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cum repudiandae corrupti nisi asperiores, nulla expedita delectus quidem corporis suscipit!l Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur aperiam nisi laboriosam molestiae dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eligendi ab nihil qui architecto iure voluptate sit sint illum temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magnam accusantium modi. Eaque, vero sed
        </p>
        <b className='text-gray-800'>OUR Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel aliquid laborum ut voluptates ipsa at, a ipsam odit temporibus ea numquam ex aspernatur praesentium voluptate nostrum! Quas, neque cupiditate.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
       <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assuarance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt obcaecati autem et id ullam!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convinience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt obcaecati autem et id ullam!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt obcaecati autem et id ullam!</p>
        </div>
       </div>
       <NewsletterBox/>
    </div>
  )
}

export default About
