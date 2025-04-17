
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
            <p className="text-white/70">© 2025 Muslim Lighthouse. All rights reserved.</p>
          </div>
        </div>
        
        <div className="text-center">
          
        </div>
      </div>
    </footer>;
};
export default Footer;
