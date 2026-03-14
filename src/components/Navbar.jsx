import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Books', path: '/books' },
    { name: 'Partnership', path: '/partnership' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="ILM Educational Trust & Super AIP" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-accent transition-colors">
            Login
          </a>
          <a href="#" className="btn-primary flex items-center gap-2">
            Enroll Now — Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={closeMenu}
              className={`py-3 px-4 rounded-lg font-semibold ${location.pathname === link.path ? 'bg-primary/5 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 mt-4 px-4 pb-4 border-t border-gray-100 pt-4">
            <a href="#" className="btn-secondary text-center">Login</a>
            <a href="#" className="btn-primary text-center">Enroll Now — Free</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
