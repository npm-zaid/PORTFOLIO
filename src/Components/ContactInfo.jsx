import Magnetic from '../Components/Magnetic';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const IconData =[
  "ri-instagram-line",
  "ri-twitter-line",
  "ri-linkedin-fill",
  "ri-github-line",
  
]
const ContactInfo = () => {
  
 

  return (
    <div className='contact sm:h-[100vh] h-[90vh] w-full  flex flex-col  sm:gap-8 gap-6 items-center justify-center text-gray-400'>
<h1 className='relative text-gray-400 sm:text-[2vw] text-[5vw] text-center mb-6'>lets work together
<span className='absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent '></span>
      </h1>

      <p className='sm:text-[3vw] text-[3.7vw] font-bold text-wrap bg-gradient-to-r from-[#111111] via-gray-400 to-transparent   animate-gradient bg-[length:200%] bg-clip-text text-transparent'>zaidcodes.404@gmail.com</p>
      <p className='text-zinc-400 sm:text-[1vw] text-[2.4vw]'>Contact me at 9411903629</p>

<div className='flex flex-wrap gap-6 items-center justify-center sm:w-full w-[70%]'>
{
    IconData.map((icon, index) => {
    return (
      <Magnetic key={index} icon={icon}/>
    ) 
    })
  }
</div>
   
    </div>
  )
}

export default ContactInfo
