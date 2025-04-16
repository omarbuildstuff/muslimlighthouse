
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Introduction = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "RNMH13-lG0o";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section id="program" className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your path to becoming of the <span className="gradient-text">knowledgeable...</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            Muslim Lighthouse offers a structured path to learning traditional Islamic sciences through the methodology of Mauritanian scholars, known for their preservation of knowledge across generations.
          </p>
        </div>
        
        <div className="flex flex-col gap-12 items-center">
          <div className="lg:w-1/2 max-w-3xl mx-auto">
            <div className="video-container bg-navy-50 relative overflow-hidden rounded-3xl shadow-xl">
              {isPlaying ? (
                <div className="w-full aspect-video">
                  <iframe 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Program overview video" 
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
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Play size={24} className="fill-lighthouse-500 ml-1" />
                    </div>
                  </div>
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt="Program overview video" 
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

export default Introduction;
