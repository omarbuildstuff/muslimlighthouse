
import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-gradient-to-b from-lighthouse-50/50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform your <span className="gradient-text">iman</span> through bite-sized lessons
            </h1>
            
            <p className="text-navy-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Join our community of dedicated students seeking authentic Islamic knowledge through traditional texts and scholarly guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#join-now" className="cta-button animate-pulse-light">
                Join Now
              </a>
              
              <a href="#free-lesson" className="secondary-button flex items-center gap-2">
                <Play size={18} className="fill-lighthouse-500" />
                Watch Free Lesson
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-float">
            <div className="video-container overflow-hidden rounded-3xl shadow-xl border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Play size={30} className="fill-lighthouse-500 ml-1" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1566993249945-79dfe5323a18?q=80&w=1000" 
                alt="Islamic education video preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
