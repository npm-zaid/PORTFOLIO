import React from 'react'
import Hero from '../Components/Hero';


import Info2 from '../Components/Info2';
import Svg from '../Components/Svg';
import Projects from '../Components/Projects';
import Eyes from '../Components/Eyes';
import { IconCloud } from '../Components/IconCloud';
import Three from '../Components/Three';
import { Canvas } from '@react-three/fiber';
import { Gun } from '../Components/Gun';
import ContactInfo from '../Components/ContactInfo';
import TechStack from '../Components/TechStack';
import Sphere from '../Components/Sphere';
import Footer from '../Components/Footer';
import ContactInfo2 from '../Components/ContactInfo2';
import Contact3d from '../Components/Contact3d';
import Circular from '../Components/Circular';



const Home = () => {
  return (
    <>
  
  <Hero/>   
    <Svg/>
      <Info2 />
      <Projects />

      <Eyes />
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
