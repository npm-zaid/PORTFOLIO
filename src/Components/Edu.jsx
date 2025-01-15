import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Edu = () => {
  const educationContainerRef = useRef(null);
  const educationEntriesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: educationContainerRef.current,
        start: 'top 80%', // Adjust as needed
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(educationContainerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });

    educationEntriesRef.current.forEach((entry, index) => {
      tl.from(
        entry,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          delay: index * 0.2, // Staggered animation
          ease: 'power1.out',
        },
        '-=0.4' // Overlap animations slightly
      );
    });
  }, []);

  return (
    <div
      ref={educationContainerRef}
      className="sm:px-8"
    >
       <h1 className='text-[8vw] lg:text-5xl font-bold mb-24 text-[#FFDC00] relative'>education
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

      <div className="space-y-12">
        {[
          {
            degree: 'bachelor of computer application',
            institution: 'sharda university , Agra',
            dates: 'Sept. 2021 - May 2024',
            details:
             "Obtained a Bachelor of Computer Application degree, focusing on software development and database management. Relevant coursework included programming, data structures, and computer networks. Graduated with honors.",
          },
          {
            degree: 'inter',
            institution: 'all saints school',
            dates: 'Sept. 2018 - May 2019',
            details: 'Focused on Web Development and Database Management.',
          },
          {
            degree: 'High School',
            institution: 'all saints school',
            dates: 'Sept. 2016 - May 2017',
            details: 'General Studies.',
          },
        ].map((edu, index) => (
          <div
            ref={(el) => (educationEntriesRef.current[index] = el)}
            key={index}
            className=" transform -translate-y-10 " // Initial state for animation
          >
            <h3 className="text-sm sm:leading-8 leading-6 md:text-[1.8vw] font-semibold mb-2 text-white ">
              {edu.degree} /{edu.institution}
            </h3>
            <p className="text-gray-400 mb-5 sm:text-[1vw] text-[1.8vw]">{edu.dates}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edu;