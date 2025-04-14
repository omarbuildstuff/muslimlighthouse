
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/318cf83b-5ea0-41fb-98e6-be0bf3b21ff4.png" 
                alt="Muslim Lighthouse Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-white">Muslim Lighthouse</span>
            </div>
          </div>
          
          <div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-3">
                <div className="text-lighthouse-400 mt-1">
                  <Mail size={18} />
                </div>
                <span className="text-white/70">info@muslimlighthouse.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-lighthouse-400 mt-1">
                  <Phone size={18} />
                </div>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Muslim Lighthouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
