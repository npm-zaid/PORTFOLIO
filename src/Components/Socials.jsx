import React from 'react'
import Magnetic from '../Components/Magnetic'

const Socials = () => {

  const IconData =[
    "ri-instagram-line",
    "ri-facebook-fill",
    "ri-twitter-line",
    "ri-linkedin-fill",
    "ri-github-line",
    "ri-telegram-2-line"
  ]
   

  return (
    <div className="  flex flex-col justify-center h-[80vh] sm:gap-8 gap-12">
     
         <h1 className='text-[8vw] lg:text-5xl font-bold text-[#FFDC00] relative'>socials
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

      <div className='flex flex-wrap gap-8 h-[40vh]  justify-center items-center'>
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

export default Socials
