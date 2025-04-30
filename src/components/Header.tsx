import React from 'react';
import { useState } from 'react';
import { X, Menu } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-6 fixed top-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="h-10">
          <Link to="/">
            <img 
              src="https://i.imgur.com/PQZp11K.jpeg"
              alt="GH Logo"
              className="h-10 w-auto object-contain" // Slightly increased height from h-8 to h-10
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link>
          <Link to="/projects" className="text-gray-600 hover:text-black transition-colors">Projects</Link>
          <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
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
            <Link 
              to="/" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
