import React from 'react'
import Hero from '../Components/Hero';


import Info2 from '../Components/Info2';
import Svg from '../Components/Svg';
import Projects from '../Components/Projects';
import Eyes from '../Components/Eyes';
import ContactInfo from '../Components/ContactInfo';

import Circular from '../Components/Circular';



const Home = () => {
  return (
    <>
  
  <Hero/>   
    <Svg/>
      <Info2 />
      <Projects />

      
      <Circular/>
      <ContactInfo />

  

      
      
      {/* <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Gun />
      </Canvas> */}

      

    </>
  )
}

export default Home
