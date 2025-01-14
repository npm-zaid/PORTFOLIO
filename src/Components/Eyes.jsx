import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Eyes = () => {

  
  const eyeLeft = useRef(null);
  const eyeRight = useRef(null);
  const eyeLeftpuple = useRef(null);
  const eyeRightpuple = useRef(null);

  useEffect(() => {
    gsap.from(".section-2", {
      scale: 0.90,
      duration: 0.4,
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%",
        end: "60% bottom",
        scrub: true,
      },
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      if (eyeLeft.current && eyeRight.current) { // Check if both refs are valid
        gsap.to(eyeLeft.current, { x: x * 0.03, y: y * 0.07, duration: 0.3 });
        gsap.to(eyeRight.current, { x: x * 0.03, y: y * 0.07, duration: 0.3 });
      }
      if(eyeLeftpuple.current && eyeRightpuple.current){
        gsap.to(eyeLeftpuple.current, { x: x * 0.06, y: y * 0.08, duration: 0.3 });
        gsap.to(eyeRightpuple.current, { x: x * 0.06, y: y * 0.08, duration: 0.3 });
      }
    };

    const blinkEyes = () => {
      if (eyeLeft.current && eyeRight.current) { // Check before animating
        gsap.to([eyeLeft.current, eyeRight.current], { scaleY: 0, duration: 0.1, yoyo: true, repeat: 1 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    const blinkInterval = setInterval(blinkEyes, 3000);

    return () => { // Cleanup on unmount
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []); // Empty dependency array is correct here

  return (
    <div className='section-2 flex items-center eye-wrapper w-full h-[80vh] overflow-hidden bg-[#FFDC00] rounded-t-2xl py-[5vw] '>
      <div className=' w-full flex items-center justify-center lg:mt-0 mt-14 '>
        <div className='flex lg:gap-14 gap-7'>
          <div className='eyeball lg:h-[14vw] lg:w-[14vw] h-[22vh] w-[22vh] bg-slate-100 rounded-full flex items-center justify-center shadow-black shadow-2xl '>
            <div ref={eyeLeft} className='bg-black w-2/3 h-2/3 rounded-full flex items-center justify-center'>
              <div ref={eyeLeftpuple} className='bg-slate-100 w-1/4 h-1/4 rounded-full'></div>
            </div>
          </div>

          <div className='eyeball lg:h-[14vw] lg:w-[14vw] h-[22vh] w-[22vh] bg-slate-100 rounded-full flex items-center justify-center shadow-black shadow-2xl'>
            <div ref={eyeRight} className='bg-black w-2/3 h-2/3 rounded-full flex items-center justify-center '>
              <div ref={eyeRightpuple} className='bg-slate-100 w-1/4 h-1/4 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;