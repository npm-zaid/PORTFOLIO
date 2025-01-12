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
    <div className='contact h-[100vh] w-full bg-zinc-800  flex flex-col gap-6 items-center justify-center text-gray-400'>
<h1 className='relative text-gray-400 sm:text-[2vw] text-[5vw] leading-[2.5em] text-center'>lets work together
<span className='absolute -bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-500 to-transparent '></span>
      </h1>

      <p className='sm:text-[3vw] text-[8vw] text-wrap bg-gradient-to-r from-[#111111] via-gray-400 to-transparent  sm:leading-[3rem] leading-[4rem]  animate-gradient bg-[length:200%] bg-clip-text text-transparent'>zaidrehman711@gmail.com</p>
      <p className='text-zinc-400 sm:text-[1vw] text-[2vw]'>Contact me at 000-123-4567</p>

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
