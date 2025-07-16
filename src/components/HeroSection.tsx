
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
              Hi, I'm George. <br />
              A aerospace engineer specializing in CAD design and additive manufacturing.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl">
              I build striking designs with a focus on form, 
              ease of manufacture, and engineering principles.
            </p>
            
            <div className="space-x-6">
              <Link 
                to="/projects" 
                className="inline-block px-8 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                View My Work
              </Link>
              <a 
                href="#about" 
                className="inline-block px-8 py-3 text-gray-600 hover:text-black transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop&crop=face"
                alt="George - Aerospace Engineer"
                className="w-full h-full object-cover"
              />
            </div>
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
