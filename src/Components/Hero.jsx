import React from 'react';
import HeroChild from './HeroChild';

const Hero = () => {
  return (
    <div className="w-full relative mt-20 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <img
        src="/7ce2691f10514a66adfb63f38260c10a 1.png"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-28 h-full flex items-center">
        <HeroChild />
      </div>
    </div>
  );
};

export default Hero;