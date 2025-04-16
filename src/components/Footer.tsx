import React from 'react';
import { Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-navy-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/318cf83b-5ea0-41fb-98e6-be0bf3b21ff4.png" alt="Muslim Lighthouse Logo" className="h-10 w-auto" />
            
          </div>
          
          <div className="text-center md:text-left">
            <a href="mailto:info@muslimlighthouse.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail size={18} className="text-lighthouse-400" />
              <span>info@muslimlighthouse.com</span>
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Muslim Lighthouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;