import React from 'react'
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
  return (
    <section class="main-container bg-[#FFDC00] rounded-b-2xl">
    <div class="main">
      <div className="big-circle sm:h-[600px] h-[400px] sm:w-[600px] w-[400px]">
        <div class="icon-block">
          <img src={pic1} alt="web design icon" />
        </div>
        <div class="icon-block">
          <img src={pic2} alt="game design icon" />
        </div>
        <div class="icon-block">
          <img src={pic10} alt="game dev icon" />
        </div>
        <div class="icon-block">
          <img src={pic4}lt="ui-ux icon" />
        </div>
      </div>
      <div class="circle">
        <div class="icon-block">
          <img src={pic5}alt="app icon" />
        </div>
        <div class="icon-block">
          <img src={pic6} alt="blockchain icon" />
        </div>
        <div class="icon-block">
          <img src={pic7}t="ar-vr icon" />
        </div>
        <div class="icon-block">
          <img src={pic8} alt="artificial intelligence icon" />
        </div>
      </div>
      <div class="center-logo  sm:text-[2vw] text-[6vw] font-bold">
       techstack
      </div>
    </div>
  </section>
  )
}

export default Circular
