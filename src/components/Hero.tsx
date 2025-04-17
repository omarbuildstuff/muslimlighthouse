
import React, { useState } from 'react';
import { Play, Users, Calendar, BookOpen, Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "p6_2s_357_Q";
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  
  return (
    <section className="pt-6 md:pt-8 lg:pt-10 pb-0 px-4 md:px-6 bg-gradient-to-b from-lighthouse-50/50 to-white min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col space-y-4 md:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Transform your <span className="gradient-text">iman</span> through bite-sized lessons
            </h1>
            
            <p className="text-navy-400 text-base sm:text-lg max-w-xl">
              Join our community of dedicated students seeking authentic Islamic knowledge through traditional texts and scholarly guidance.
            </p>
            
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-2 bg-lighthouse-50/90 p-2 md:p-2.5 rounded-lg">
                <div className="bg-lighthouse-100 p-1.5 rounded-full text-lighthouse-600 flex-shrink-0">
                  <Users size={14} />
                </div>
                <p className="text-navy-600 text-sm">Interact with teachers and students in our community</p>
              </div>
              <div className="flex items-center gap-2 bg-lighthouse-50/90 p-2 md:p-2.5 rounded-lg">
                <div className="bg-lighthouse-100 p-1.5 rounded-full text-lighthouse-600 flex-shrink-0">
                  <Calendar size={14} />
                </div>
                <p className="text-navy-600 text-sm">Multiple weekly live classes to maximize benefit</p>
              </div>
              <div className="flex items-center gap-2 bg-lighthouse-50/90 p-2 md:p-2.5 rounded-lg">
                <div className="bg-lighthouse-100 p-1.5 rounded-full text-lighthouse-600 flex-shrink-0">
                  <BookOpen size={14} />
                </div>
                <p className="text-navy-600 text-sm">Learn from concise courses to level up knowledge</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="https://www.muslimlighthouse.app/checkout/premium-membership" className="cta-button py-2 px-4 md:px-6 text-sm">
                Join Now
              </a>
              
              <a href="#free-lesson" className="secondary-button flex items-center gap-1.5 justify-center px-4 py-2 text-sm">
                <Play size={14} className="fill-lighthouse-500" />
                Watch Free Lesson
              </a>
            </div>
          </div>
          
          {/* Video Column */}
          <div className="lg:col-span-6 w-full">
            <div className="video-container overflow-hidden rounded-xl shadow-lg border-2 border-white">
              {isPlaying ? (
                <div className="w-full aspect-video">
                  <iframe 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                    title="Islamic education video" 
                    className="w-full h-full absolute inset-0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <AspectRatio ratio={16 / 9}>
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group" 
                    onClick={handlePlayClick}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Play size={18} className="fill-lighthouse-500 ml-1 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <img 
                    src="https://img.youtube.com/vi/p6_2s_357_Q/maxresdefault.jpg" 
                    alt="Islamic education video preview" 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
