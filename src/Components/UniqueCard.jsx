import React from "react"

const UniqueCard=()=>{
 return(
<div className="min-h-screen py-8">
    
<h1 className='text-[8vw] lg:text-5xl font-bold text-[#FFDC00] relative mb-10'>skills
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>
    
    <div className="w-full  flex sm:flex-row flex-col justify-center items-center gap-8">
<div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10  face1 flex items-center justify-center text-white sm:text-[2vw] text-[5vw] bg-black"><h1>frontend</h1></div>
    <div className="sub-box text-white border-2 border-dashed border-[#FFDC00]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3  h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full  flex flex-col gap-2 items-center justify-center  bg-zinc-800">
    <p>css</p>
    <p>html</p>
    <p>react</p>
    <p>tailwind</p>
    <p>javascript</p>
    </div>
    </div>

    <div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10 face1 flex items-center justify-center text-white sm:text-[2vw] text-[5vw] bg-black"><h1>backend</h1></div>
    <div className="sub-box text-white border-2 border-dashed border-[#FFDC00]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3   h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full flex flex-col gap-2 items-center justify-center  bg-zinc-800">
    <p>nodejs</p>
    <p>mongodb</p>
    <p>express</p></div>
    </div>

    <div className="boxes h-[70vh] sm:w-[27vw] w-[70vw]  relative group">
    <div className="sub-box rounded-xl group-hover:rounded-b-none h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-0 group-hover:-translate-y-0 z-10 face1 flex items-center justify-center text-white sm:text-[2vw] text-[5vw] bg-black"><h1>extra</h1></div>
    <div className="sub-box text-white border-2 border-dashed border-[#FFDC00]  group-hover:rounded-b-xl sm:text-[1vw] text-[2.7vw] p-3   h-[50%] w-full absolute  transition-all duration-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-full group-hover:-translate-y-full  flex flex-col gap-2 items-center justify-center  bg-zinc-800">
    <p>gsap</p>
    <p>lenisjs</p>
    <p>threejs</p>
    <p>framer motion</p></div>
    </div>

    </div>

    
</div>
 )
}

export default UniqueCard