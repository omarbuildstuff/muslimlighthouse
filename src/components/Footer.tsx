
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/318cf83b-5ea0-41fb-98e6-be0bf3b21ff4.png" 
                alt="Muslim Lighthouse Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-white">Muslim Lighthouse</span>
            </div>
            
            <p className="text-white/70 mb-6">
              Traditional Islamic knowledge in a modern format. Learn at your own pace with structured, bite-sized lessons.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-navy-700 hover:bg-lighthouse-500 transition-colors p-2 rounded-full text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-lighthouse-500 transition-colors p-2 rounded-full text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-lighthouse-500 transition-colors p-2 rounded-full text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-navy-700 hover:bg-lighthouse-500 transition-colors p-2 rounded-full text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#program" className="text-white/70 hover:text-lighthouse-300 transition-colors">Program</a>
              </li>
              <li>
                <a href="#sciences" className="text-white/70 hover:text-lighthouse-300 transition-colors">Islamic Sciences</a>
              </li>
              <li>
                <a href="#teachers" className="text-white/70 hover:text-lighthouse-300 transition-colors">Teachers</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-lighthouse-300 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-lighthouse-300 transition-colors">Pricing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-lighthouse-300 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-lighthouse-400 mt-1">
                  <Mail size={18} />
                </div>
                <span className="text-white/70">info@muslimlighthouse.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-lighthouse-400 mt-1">
                  <Phone size={18} />
                </div>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-lighthouse-400 mt-1">
                  <MapPin size={18} />
                </div>
                <span className="text-white/70">
                  1234 Islamic Education Way<br />
                  Knowledge City, KN 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Muslim Lighthouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
