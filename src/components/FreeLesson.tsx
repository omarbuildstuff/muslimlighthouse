import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const FreeLesson = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const videoId = "w-w47CSUuIo";
  const videoId2 = "OPf5n7WiHWw";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handlePlayClick2 = () => {
    setIsPlaying2(true);
  };

  return (
    <>
      <svg width="0" height="0">
  {/* Reduced shadow offset and blur for better mobile appearance */}
  <filter id="play-shadow" x="-25%" y="-25%" width="150%" height="150%">
    <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" flood-color="black" flood-opacity="0.4" />
  </filter>
</svg>
      <section id="free-lesson" className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12 items-center">
            <div className="lg:w-1/2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Try a <span className="gradient-text">Free Lesson</span> First
              </h2>
              
              <p className="text-navy-400 text-lg mb-8">
                Not sure if Muslim Lighthouse is right for you? Get a taste of our teaching style and content quality with 2 free lessons from our Fiqh of Fasting & Sound Heart courses.
              </p>
            </div>
            
            <div className="lg:w-3/4 max-w-3xl w-full space-y-8">
              {/* First Video */}
              <div className="glass-card bg-navy-50/80 rounded-xl shadow px-4 py-3 mb-2 text-lg font-bold text-lighthouse-500 text-center tracking-tight">
                Fiqh of Fasting <span className="text-navy-600 font-semibold">— Conditions of a Valid Fast</span>
              </div>
              <div className="video-container relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                {isPlaying ? <div className="w-full aspect-video">
                    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Free lesson preview" className="w-full h-full absolute inset-0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div> : <AspectRatio ratio={16 / 9}>
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group" onClick={handlePlayClick}>
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden drop-shadow-md md:drop-shadow-xl group-hover:scale-105 transition-transform">
                        <Play size={30} className="fill-lighthouse-500 ml-1" stroke="none" style={{ filter: 'url(#play-shadow)' }} />
                      </div>
                    </div>
                    <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Free lesson preview" className="w-full h-full object-cover" />
                  </AspectRatio>}
              </div>
              {/* Second Video */}
              <div className="glass-card bg-navy-50/80 rounded-xl shadow px-4 py-3 mb-2 text-lg font-bold text-lighthouse-500 text-center tracking-tight">
                Sound Heart <span className="text-navy-600 font-semibold">— Is Your Heart Dirty?</span>
              </div>
              <div className="video-container relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                {isPlaying2 ? <div className="w-full aspect-video">
                    <iframe src={`https://www.youtube.com/embed/${videoId2}?autoplay=1`} title="Free lesson preview 2" className="w-full h-full absolute inset-0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div> : <AspectRatio ratio={16 / 9}>
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group" onClick={() => setIsPlaying2(true)}>
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden drop-shadow-md md:drop-shadow-xl group-hover:scale-105 transition-transform">
                        <Play size={30} className="fill-lighthouse-500 ml-1" stroke="none" style={{ filter: 'url(#play-shadow)' }} />
                      </div>
                    </div>
                    <img src={`https://img.youtube.com/vi/${videoId2}/maxresdefault.jpg`} alt="Free lesson preview 2" className="w-full h-full object-cover" />
                  </AspectRatio>}
              </div>
            </div>
            {/* CTAs below free lessons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full">
              <a
                href="https://www.muslimlighthouse.app/checkout/premium-membership"
                className="cta-button animate-pulse-light w-full sm:w-auto text-base font-semibold px-8 py-4 md:px-10 md:py-5"
                style={{ minHeight: 56 }}
              >
                Join Now
              </a>
              <a
                href="#pricing"
                className="secondary-button w-full sm:w-auto flex items-center gap-2 justify-center text-base font-semibold px-8 py-4 md:px-10 md:py-5"
                style={{ minHeight: 56 }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default FreeLesson;