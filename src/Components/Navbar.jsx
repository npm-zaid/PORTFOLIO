 import React from 'react'
 import { useRef, useEffect ,useState} from 'react';
 import gsap from 'gsap';
 import { useGSAP } from '@gsap/react';
 import { NavLink } from 'react-router-dom';
 gsap.registerPlugin(useGSAP);
 
 function Navbar() {

  const burger = useRef();

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
     const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

   const [active,setactive] =useState(false)
   const toggle =()=>{
       setactive(!active)
   }

const tl = useRef();
useGSAP(()=>{
  
   tl.current = gsap.timeline({paused:false})

       .to(".sidebar",{
         transform: 'translateX(0%)',
         ease: "slow(0.2,0.2,false)",
         duration:.6,
       })
     
      .from(".links",{
       opacity: 0,
       x:100,
       duration:.4,
       ease: "slow(0.2,0.2,false)",
       stagger: {
         amount: 0.2,
       },

      }) 
})

//SIDEBAR
useEffect(()=>{
  if(active){
    tl.current.play()
  }
  else{
    tl.current.reverse()
  }

},[active])

//SVG CURVE
useEffect(()=>{
  if(active){
      gsap.to('.svgCurve path',{
        attr:{d:targetPath},
        ease: "slow(0.2,0.2,false)",
        duration:1,
      })
  }
  else{
      gsap.to('.svgCurve path',{
        attr:{d:initialPath},
        ease:"slow(0.2,0.2,false)",
        duration:1,
        delay:.8
        
      })
  }
},[active])

   return (
   <nav className='z-50 absolute w-full  bg-blue-500/40'>
    <label  ref={burger}  className="hamburger z-40 fixed scale-150 right-10 top-10 ">
  <input onClick={toggle}   type="checkbox"/>
  <svg  className='bg-black rounded-full p-1'  viewBox="0 0 32 32">
    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
    <path className="line" d="M7 16 27 16"></path>
  </svg>
</label>

{/**SIDEBAR */}
<div className={`sidebar fixed bg-[#232222]  top-0 right-0 h-[100vh] sm:w-[30vw] w-[100vw] transform translate-x-[130%]`}>
<svg className='svgCurve'>
        <path d={initialPath}></path>
    </svg>
    <div className=' h-full w-full flex flex-col gap-8 '> 
    <div className=''><h1 className='py-6 text-zinc-700 border-b border-zinc-600'>NAVIGATIONS</h1></div>
   <div className="flex  flex-col gap-4  p-4  text-2xl text-gray-400">
    <h1 onClick={toggle} className='links' ><NavLink to='/' className='hover:text-white hover:translate-x-3 transition-all duration-500 inline-block  '>Home</NavLink></h1>
    <h1 onClick={toggle} className='links' ><NavLink to='/about' className='hover:text-white hover:translate-x-3 transition-all duration-500 inline-block  '>About</NavLink></h1>
    <h1 onClick={toggle} className='links' ><NavLink to='/work' className='hover:text-white hover:translate-x-3 transition-all duration-500 inline-block  '>Work</NavLink></h1>
    <h1 onClick={toggle} className='links' ><NavLink to='/contact' className='hover:text-white hover:translate-x-3 transition-all duration-500 inline-block  '>Contact</NavLink></h1>
   </div>
  
   </div>
</div>
   </nav>
   )
 }
 
 export default Navbar
 