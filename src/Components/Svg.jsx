import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Svg = () => {

    useEffect(()=>{
        gsap.to('.data',{
          attr:{startOffset:'100%'},
          duration:5,
          scrollTrigger: {
            trigger: '.data',
            scroller:'body',
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          },
        })
      })
      

  return (
    <div className="class sm:h-screen h-[50vh]  bg-zinc-900 ">
    <svg className="w-full h-full  " viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke=""
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="data uppercase" style={{ fill: "white" }}>
        
              <textPath className="data "  startOffset={"-200%"} href="#curve">
               I AM A FUCKING FULL-STACK DEVELOPER 
              </textPath>
             

        </text>
      </svg>
    </div>
  )
}

export default Svg
