import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Recog = () => {
  const containerRef = useRef(null);
  const entriesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Adjust as needed
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(containerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' });

    entriesRef.current.forEach((entry, index) => {
      tl.fromTo(
        entry,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: index * 0.2, ease: 'power1.out' },
        '-=0.4' // Overlap animations slightly
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="sm:px-8 my-20 text-white">
     
      <h1 className='text-[7.5vw] lg:text-5xl font-bold mb-16 text-[#FFDC00] relative'> Recognition
      <span className='absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDC00] to-transparent '></span>
      </h1>

      <div className="space-y-8">
        {/** Replace with your recognition and award data */}
        {[
          {
            title: 'Best Innovation Award',
            awarder: 'Technovation Conference',
            date: '2023',
            description: 'Awarded for developing a groundbreaking AI solution.',
          },
          {
            title: 'Dean’s List',
            awarder: 'University of Excellence',
            date: '2022 (Fall & Spring)',
            description: 'Recognized for outstanding academic achievement.',
          },
        ].map((item, index) => (
          <div
            ref={(el) => (entriesRef.current[index] = el)}
            key={index}
            className="flex flex-col items-start justify-center space-y-2 opacity-0 transform scale-80" // Initial state for animation
          >
            <h3 className=" text-xl md:text-2xl font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.awarder} - {item.date}</p>
            <p className="leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recog;