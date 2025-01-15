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
    "I am a full stack developer with a passion for building dynamic and responsive web applications with a strong foundation in both front-end and back-end technologies.",
    "I have experience working with various frameworks and libraries including React , Redux , Gsap and many more for Creating interactive front-end applications.",
   "I'm also proficient in nodejs , express  and Mongodb for robust backend development. ",
    "additionally,  I am well versed in version control system especially git and Github for collaborative development.",
    "My goal is to continously learn and improve my skills while contributing to meaningful projects. "
  ];

  return (
    <div className=" min-h-screen page3 flex justify-center items-center flex-col gap-10 sm:text-xl text-sm sm:px-10 px-5 text-zinc-300">
      {textLines.map((line, index) => (
        <h1 key={index} className='text-start' style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}> {/* Add whiteSpace */}
          {line.split('').map((char, charIndex) => (
            <span key={charIndex} className="inline-block sm:leading-10 leading-8">
              {char}
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
};

export default Info2;