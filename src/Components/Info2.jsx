import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info2 = () => {
  useEffect(() => {
    gsap.fromTo(
      '.page3 h1 span',
      {
        willChange: 'opacity, transform',
        transformOrigin: '50% 0%',
        opacity: 0,
        rotationX: -90,
        z: -200,
      },
      {
        ease: 'power1',
        opacity: 1,
        rotationX: 0,
        z: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.page3',
          start: 'top 80%',
          end: 'bottom top+=20%',
          scrub: true,
          toggleActions: "play none none reverse"
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const textLines = [
    "Greetings! I'm an enthusiastic Full Stack Developer who thrives on crafting vibrant and interactive web applications.",
    "My expertise spans both front-end and back-end technologies, allowing me to weave together seamless user experiences that captivate and engage.",
    "I've dabbled in a variety of frameworks and libraries, such as Angular and Vue.js, which empowers me to tackle diverse project challenges with creativity and flair.",
    "I'm also proficient in harnessing the power of RESTful APIs and GraphQL, making data retrieval and manipulation not just efficient, but also elegant.",
  ];

  return (
    <div className="bg-zinc-900 h-screen page3 flex justify-center items-center flex-col gap-8 sm:text-xl text-sm px-8  text-zinc-300">
      {textLines.map((line, index) => (
        <h1 key={index} style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}> {/* Add whiteSpace */}
          {line.split('').map((char, charIndex) => (
            <span key={charIndex} className="inline-block">
              {char}
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
};

export default Info2;