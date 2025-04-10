
import React from 'react';
import { useState } from 'react';
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-6 fixed top-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-medium text-lg tracking-tight">
          <a href="#">Alex Smith</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <a href="#about" className="text-gray-600 hover:text-black transition-colors">About</a>
          <a href="#skills" className="text-gray-600 hover:text-black transition-colors">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-black transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="p-2 focus:outline-none" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-6 px-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#about" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
