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
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
                
            }
        }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const textLines = [
   'As of full-stack developer I possess a comprehensive skill set that encompasses both front-end and back-end technologies.',
   'my primary expertise lies in react , a powerful javascript library that enables the creation of dynamic user interface.',
   'I also have substantial experience with Mongodb , a Nosql database that allows for flexible data storage and Retrieval.',
   'i aslo know express js , a web application framework for Nodejs that simplifies the development of server side application.',
   'additionally I am a proficient in node js , which enables me to build scalable network applications using javascript on the server side.'
  ];

  return (
    <div className="bg-[#FFDC00] min-h-screen page4 flex justify-center items-center flex-col gap-8 sm:text-lg text-sm pb-12 sm:px-10 px-6 text-black rounded-b-xl">
      {textLines.map((line, index) => (
        <h1 key={index} className='leading-6  sm:leading-8' style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}> 
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