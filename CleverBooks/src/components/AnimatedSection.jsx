// src/components/AnimatedSection.js
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import CountUp from 'react-countup';

const AnimatedSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    if (sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      if (sidebarRect.top <= 50) {
        sidebarRef.current.style.position = 'fixed';
        sidebarRef.current.style.top = '50px';
      } else {
        sidebarRef.current.style.position = 'absolute';
        sidebarRef.current.style.top = 'initial';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100%)',
  });

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center relative">
      <div ref={sidebarRef} className="absolute top-1/4 left-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="container mx-auto py-8">
        <animated.div style={props} className="flex items-center">
          <div className="mr-8">
            <div className="flex flex-col items-center text-lg">
              <div className="py-2">
                <button className="bg-transparent text-white">STOCKOUTS</button>
              </div>
              <div className="py-2">
                <button className="bg-transparent text-white">CASH RECOVERY CYCLE</button>
              </div>
              <div className="py-2">
                <button className="bg-transparent text-white">REVENUE</button>
              </div>
            </div>
          </div>
          <div className="text-center">
            {inView && (
              <CountUp start={0} end={85} duration={2.75} suffix="%" className="text-6xl font-bold gradient-text" />
            )}
            <p className="text-2xl mt-4">Reduction in out-of-stock</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default AnimatedSection;
