
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 fixed top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-2xl text-engineer-darkBlue">
          <a href="#">Alex Smith</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-engineer-gray hover:text-engineer-blue transition-colors">About</a>
          <a href="#skills" className="text-engineer-gray hover:text-engineer-blue transition-colors">Skills</a>
          <a href="#projects" className="text-engineer-gray hover:text-engineer-blue transition-colors">Projects</a>
          <a href="#contact" className="text-engineer-gray hover:text-engineer-blue transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-engineer-gray hover:text-engineer-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-engineer-gray hover:text-engineer-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-engineer-gray hover:text-engineer-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-engineer-gray hover:text-engineer-blue transition-colors"
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
