import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/lovable-uploads/318cf83b-5ea0-41fb-98e6-be0bf3b21ff4.png" alt="Muslim Lighthouse Logo" className="h-12 w-auto" />
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#program" className="text-navy-500 hover:text-lighthouse-500 transition-colors font-medium">Program</a>
          <a href="#sciences" className="text-navy-500 hover:text-lighthouse-500 transition-colors font-medium">Sciences</a>
          <a href="#teachers" className="text-navy-500 hover:text-lighthouse-500 transition-colors font-medium">Teachers</a>
          <a href="#testimonials" className="text-navy-500 hover:text-lighthouse-500 transition-colors font-medium">Testimonials</a>
          <a href="#pricing" className="text-navy-500 hover:text-lighthouse-500 transition-colors font-medium">Pricing</a>
          
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white py-4 shadow-lg animate-in fade-in slide-in-from-top-5">
          <nav className="container mx-auto flex flex-col items-center gap-4">
            <a href="#program" className="text-navy-500 hover:text-lighthouse-500 transition-colors py-2 w-full text-center font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Program
            </a>
            <a href="#sciences" className="text-navy-500 hover:text-lighthouse-500 transition-colors py-2 w-full text-center font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Sciences
            </a>
            <a href="#teachers" className="text-navy-500 hover:text-lighthouse-500 transition-colors py-2 w-full text-center font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Teachers
            </a>
            <a href="#testimonials" className="text-navy-500 hover:text-lighthouse-500 transition-colors py-2 w-full text-center font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="text-navy-500 hover:text-lighthouse-500 transition-colors py-2 w-full text-center font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#join-now" className="cta-button py-2 px-6 w-4/5 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Join Now
            </a>
          </nav>
        </div>}
    </header>;
};
export default Navbar;