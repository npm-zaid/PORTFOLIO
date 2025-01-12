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
      className="bg-[#111] text-[#eee] py-10 px-6 md:px-12 lg:px-20"
    >
       <h1 className='text-4xl lg:text-5xl font-bold mb-16 text-[#FFDC00] relative'>education
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

      <div className="space-y-8">
        {[
          {
            degree: 'Master of Science in Computer Science',
            institution: 'University of Example',
            dates: 'Sept. 2020 - May 2022',
            details:
              'Specialized in Artificial Intelligence. Relevant coursework included Machine Learning, Deep Learning, and Natural Language Processing. Graduated with honors.',
          },
          {
            degree: 'Bachelor of Science in Information Technology',
            institution: 'Example College',
            dates: 'Sept. 2016 - May 2020',
            details: 'Focused on Web Development and Database Management.',
          },
          {
            degree: 'High School Diploma',
            institution: 'Example High School',
            dates: 'Sept. 2012 - May 2016',
            details: 'General Studies.',
          },
        ].map((edu, index) => (
          <div
            ref={(el) => (educationEntriesRef.current[index] = el)}
            key={index}
            className=" transform -translate-y-10" // Initial state for animation
          >
            <h3 className="text-xl md:text-[1.3vw] font-semibold mb-2 bg-gradient-to-b from-[#FFDC00] to-transparent   animate-gradient  bg-clip-text text-transparent">
              {edu.degree} @{edu.institution}
            </h3>
            <p className="text-gray-400 mb-1 text-[.7vw]">{edu.dates}</p>
            <p className="leading-relaxed text-[.8vw]">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edu;