
import React from 'react';
import { useState } from 'react';
import { X, Menu } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper to determine if a link is for the current page
  const isCurrentPage = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      return true;
    }
    return path === location.pathname;
  };

  return (
    <header className="w-full py-6 fixed top-0 bg-white z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-medium text-lg tracking-tight">
          <Link to="/">Alex Smith</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link 
            to="/#about" 
            className={`${isCurrentPage('/#about') ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
          >
            About
          </Link>
          <Link 
            to="/#skills" 
            className={`${isCurrentPage('/#skills') ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            className={`${isCurrentPage('/projects') ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
          >
            Projects
          </Link>
          <Link 
            to="/#contact" 
            className={`${isCurrentPage('/#contact') ? 'text-black' : 'text-gray-600'} hover:text-black transition-colors`}
          >
            Contact
          </Link>
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
              to="/#about" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/#skills" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-600 hover:text-black transition-colors"
              onClick={closeMenu}
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
