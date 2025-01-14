import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info3 = () => {
  useEffect(() => {
    gsap.fromTo(
        '.page4 h1 span',
        {
            "will-change": "opacity, transform",
            opacity: 0.2,
            z: -800
        },
        {
            ease: "back.out(1.2)",
            opacity: 1,
            z: 0,
            stagger: 0.04,
            scrollTrigger: {
                trigger: '.page4',
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
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
    <div className="bg-zinc-900 h-screen page4 flex justify-center items-center flex-col gap-8 sm:text-xl text-sm px-8  text-zinc-300">
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

export default Info3;