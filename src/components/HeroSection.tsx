
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-engineer-darkBlue">
              Hi, I'm Alex Smith
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-engineer-gray">
              Software Engineer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build elegant software solutions with a focus on clean code and user experience. Specializing in web development and problem-solving.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-engineer-blue hover:bg-blue-600 text-white">
                View My Work
              </Button>
              <Button variant="outline" className="border-engineer-blue text-engineer-blue hover:bg-engineer-blue hover:text-white">
                Download CV
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-engineer-blue rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Alex Smith" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-engineer-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
