import React, { useEffect } from 'react'
import Magnetic from '../Components/Magnetic';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import pic1 from '../Assets/html_1051277.png'
import pic2 from '../Assets/css-3_732190.png'
import pic3 from '../Assets/js_5968292.png'
import pic4 from '../Assets/logo192.png'
import pic5 from '../Assets/pngwing.com (1).png'
import pic6 from '../Assets/pngwing.com (3).png'
import pic7 from '../Assets/pngwing.com.png'
import pic8 from '../Assets/mongodb.png'
import pic9 from '../Assets/tailwind-css-icon.png'
import pic10 from '../Assets/gsap.png'
import pic11 from '../Assets/Threejs-logo.png'

gsap.registerPlugin(ScrollTrigger);

const tools = [pic1, pic2, pic3, pic4 , pic5, pic6, pic7, pic8,pic9, pic10, pic11]

function Tool() {

  useEffect(()=>{
    gsap.from('.page3 .mega',{
      y:-250,
      opacity:0,
      duration:1,
      stagger:.8,
      scrollTrigger: {
        trigger: '.wrapper',
        scroller:'body',
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        markers: true
      },
    })
  },[])

  return (
   <div className="page3 h-screen bg-zinc-900 flex flex-col justify-center items-center">
    <h1 className='text-[3vw] border-b border-zinc-700 text-gray-400'>Tools I Used</h1>
        <div className="bg-black wrapper h-[60vh] w-full flex justify-center items-center">
        {tools.map((tool, index) => (
            <Magnetic key={index} image={tool}/>
        ))}
        </div>
   </div>
  )
}

export default Tool
