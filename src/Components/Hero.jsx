import React from 'react';
import Spline from '@splinetool/react-spline';




function Hero() {
 

  return (
    
   
    <div className='flex h-[100vh] w-full  bg-zinc-900  bg-gradient-to-r from-transparent via-zinc-700 to-transparent relative'>


     <div className='absoute sm:pt-0 pt-32 w-full h-screen flex sm:flex-row flex-col justify-between  items-center'>
    

      <div className='sm:h-full  sm:w-[35%]   flex sm:justify-center justify-start items-center flex-col text-gray-500  '>
        <h1 className='sm:text-[3vw] text-[11vw] text-center bg-gradient-to-r from-[#111111] via-gray-400 to-transparent  sm:leading-[3rem] leading-[4rem]  animate-gradient bg-[length:200%] bg-clip-text text-transparent'>ZAID REHMAN</h1>
        <h1 className='sm:text-[.6vw] text-[2vw]'>Software Engineer</h1>
      </div>

      <div className='sm:h-full sm:w-[35%]  text-gray-500 sm:text-[2.4vw] text-[8vw] text-center sm:flex hidden flex-col  sm:justify-center justify-end'>
        <h1 className=' bg-gradient-to-r from-[#111111] via-gray-500 to-transparent  leading-[3rem]  animate-gradient bg-[length:200%] bg-clip-text text-transparent'>FULL STACK</h1>
        <h1>DEVELOPER</h1>
      </div>

     </div>

<div className='absolute w-full  sm:h-screen h-[70vh]  bottom-0 '>


         <Spline  scene="https://prod.spline.design/IYaVUMfTeAozRgsp/scene.splinecode" cache />
  
<div className='h-12 w-40  bg-gradient-to-r sm:from-[#222225]  sm:via-[#1D1D21]  sm:to-[#19191C]  absolute bottom-5 right-0'></div>
</div>


  <div className='h-[8vh] w-full bg-gradient-to-b from-transparent  to-zinc-800 absolute bottom-0 left-0'></div>
</div>


  )
}

export default Hero

 