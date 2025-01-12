import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Magnetic({ icon }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Ensure cursorRef is valid before accessing its properties
      if (!cursorRef.current) return;

      const { width, height, top, left } = cursorRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(cursorRef.current, { x, y });
    };

    const handleMouseLeave = () => {
      if (!cursorRef.current) return;

      gsap.to(cursorRef.current, { x: 0, y: 0, ease: "elastic.out(1,0.3)" });
    };

    // Add event listeners only when cursorRef is available
    if (cursorRef.current) {
      cursorRef.current.addEventListener('mousemove', handleMouseMove);
      cursorRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup function to remove event listeners on unmount
    return () => {
      if (cursorRef.current) {
        cursorRef.current.removeEventListener('mousemove', handleMouseMove);
        cursorRef.current.addEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); // Empty dependency array for effect to run once

  return (
    
      <div ref={cursorRef} className=" h-24 w-24 rounded-full bg-[#FFDC00] flex items-center justify-center">
        <i className={`${icon} sm:text-[4vw] text-[12vw] text-black`}></i>
        </div>
   
  );
}

export default Magnetic;