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
    <div className="contact-container bg-[#111111] text-white p-8 md:p-16 lg:p-24 min-h-screen flex flex-col justify-center">
      <div className="w-[80vw] mx-auto">
         <h1 className='text-4xl lg:text-5xl font-bold mb-6 text-[#FFDC00] relative'>socials
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>
      <div className='flex flex-wrap gap-8 h-[40vh] justify-center items-center'>
  {
    IconData.map((icon, index) => {
    return (
      <Magnetic key={index} icon={icon}/>
    ) 
    })
  }
      </div>
      </div>
      </div>
   
  )
}

export default Socials
