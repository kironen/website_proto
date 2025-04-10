
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
            Hi, I'm Alex Smith. <br />
            A software engineer specializing in web applications and user experience.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl">
            I build elegant software solutions with a focus on clean code, 
            performance, and accessibility.
          </p>
          
          <div className="space-x-6">
            <a 
              href="#projects" 
              className="inline-block px-8 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#about" 
              className="inline-block px-8 py-3 text-gray-600 hover:text-black transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
