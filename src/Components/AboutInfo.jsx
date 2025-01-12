import React, { useEffect, useRef } from 'react';
import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

const AboutInfo = () => {
  const canvasRef = useRef(null); // Create a ref to store the canvas element

  useEffect(() => {
    const canvas = canvasRef.current; // Get the canvas element from the ref

    if (canvas) {
      const bg = Spheres2Background(canvas, {
        count: 200,
        colors: [0xff0000, 0x0, 0xffffff],
        minSize: 0.5,
        maxSize: 1
      });
    }
  }, [canvasRef]); // Dependency array ensures the effect runs only when the ref changes

  return (
    <div >
      <div className="hero h-screen flex flex-col text-[5vw] text-white justify-center items-center relative">
        <h1 className='z-20'>zaid</h1>
        <h2>rehman</h2>
      </div>

      <canvas id="webgl-canvas" className="absolute top-0 left-0" ref={canvasRef} />
      
    </div>
  );
};

export default AboutInfo;