import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "p6_2s_357_Q";
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-32 px-4 md:px-6 bg-gradient-to-b from-lighthouse-50/50 to-white min-h-screen flex items-center">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col items-center gap-8 md:gap-12 text-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Transform your <span className="gradient-text">iman</span> through bite-sized lessons
            </h1>
            
            <p className="text-navy-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto">
              Join our community of dedicated students seeking authentic Islamic knowledge through traditional texts and scholarly guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <a href="#join-now" className="cta-button animate-pulse-light px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
                Join Now
              </a>
              
              <a href="#free-lesson" className="secondary-button flex items-center gap-2 justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base">
                <Play size={16} className="fill-lighthouse-500 md:w-[18px] md:h-[18px]" />
                Watch Free Lesson
              </a>
            </div>
          </div>
          
          <div className="w-full max-w-3xl animate-float">
            <div className="video-container overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border-2 md:border-4 border-white">
              {isPlaying ? <div className="w-full aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Islamic education video" className="w-full h-full absolute inset-0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> : <AspectRatio ratio={16 / 9}>
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group" onClick={handlePlayClick}>
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Play size={20} className="fill-lighthouse-500 ml-1 md:w-[30px] md:h-[30px]" />
                    </div>
                  </div>
                  <img src="https://img.youtube.com/vi/p6_2s_357_Q/maxresdefault.jpg" alt="Islamic education video preview" className="w-full h-full object-cover" />
                </AspectRatio>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;