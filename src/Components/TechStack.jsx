import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';


const TechStack = () => {
  const sceneRef = useRef(null);
  const icons = [
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' },
    { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    // Add more icons as needed
  ];

  useEffect(() => {
    const scene = sceneRef.current;
    const engine = Matter.Engine.create({ element: scene });
    const world = engine.world;

    const iconElements = icons.map((icon, index) => {
      const x = (index % 5) * 150 + 75; // Adjust spacing as needed
      const y = Math.floor(index / 5) * 150 + 50;
      const body = Matter.Bodies.rectangle(x, y, 80, 80, { restitution: 0.5, density: 1, friction: 0.8 }); // Adjust size
      return { body, element: document.getElementById(`icon-${index}`) };
    });

    Matter.World.add(world, iconElements.map(icon => icon.body));

    // Add ground
    const ground = Matter.Bodies.rectangle(400, 600, 810, 60, { isStatic: true });
    Matter.World.add(world, ground);

    Matter.Engine.run(engine);

    const handleScroll = () => {
      gsap.to(world.gravity, { y: 1, duration: 1 }); // Apply gravity on scroll
        window.removeEventListener('scroll', handleScroll); // Remove the scroll listener
    };

    window.addEventListener('scroll', handleScroll);

    // Sync Matter.js bodies with DOM elements
    Matter.Events.on(engine, 'afterUpdate', () => {
      iconElements.forEach(icon => {
        gsap.set(icon.element, {
          x: icon.body.position.x - 40, // Adjust offset
          y: icon.body.position.y - 40,
          rotation: icon.body.angle * (180 / Math.PI),
        });
      });
    });

    return () => {
      Matter.Engine.clear(engine);
      Matter.World.clear(world);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Icon Showcase</h1>
        <div className="relative h-[600px] w-full border border-gray-300 overflow-hidden" ref={sceneRef}>
          <div className="absolute grid grid-cols-5 gap-4 w-full h-full">
            {icons.map((icon, index) => (
              <div key={index} id={`icon-${index}`} className="absolute w-20 h-20">
                <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[500px]"></div> {/* Add some content to enable scrolling */}
      </div>
    </div>
  );
};

export default TechStack;