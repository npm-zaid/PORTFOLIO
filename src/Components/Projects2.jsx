import React, { useEffect, useState, useRef } from 'react';
import Grid2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js'

const Projects2 = () => {
  const canvasRef = useRef(null); // Use a ref to access the canvas
  const [background, setBackground] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      try {
        const bg = Grid2Background(canvasRef.current);
        
        setBackground(bg);

        // Optional: Add a resize listener if needed
        const handleResize = () => {
          if (bg && bg.resize) { // Check if resize function exists
            bg.resize();
          }
        };

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
          if (bg && bg.dispose) { // Important: Dispose of resources
            bg.dispose();
          }
        };
      } catch (error) {
        console.error("Error initializing background:", error);
        // Handle the error appropriately, e.g., display a fallback
      }
    }
  }, []);

  return (
    <div className='h-screen relative'>
      <canvas id="webgl-canvas" className='absolute top-0 left-0' ref={canvasRef} />
      <div className="hero relative h-screen flex items-center justify-center">
        <h1 className="text-[5vw] font-bold text-white">Projects</h1>
        
      </div>
    </div>
  );
};

export default Projects2;