import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
const Circular = () => {

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


  return (
    <section className="section-2 sm:h-[110vh] h-[80vh] flex justify-center items-center main-container bg-[#FFDC00] rounded-xl">
    <div className="main relative">
      <div className="big-circle sm:h-[95vh] h-[95vw] sm:w-[95vh] w-[95vw]">
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px] ">
          <img className='w-[70%]' src={pic1}  />
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic2}  />
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic10} />
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic4} />
        </div>
      </div>
      <div className="circle">
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic5} />
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic6} />
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic7}/>
        </div>
        <div className="icon-block sm:h-[80px] h-[50px] sm:w-[80px] w-[50px]">
          <img className='w-[70%]' src={pic8}  />
        </div>
      </div>
      <div className="center-logo  sm:text-[2.3vw] text-[5.5vw] font-bold">
       techstack
      </div>
    </div>
  </section>
  )
}

export default Circular
