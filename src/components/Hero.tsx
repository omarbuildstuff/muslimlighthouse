import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "p6_2s_357_Q";
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return <>
  <svg width="0" height="0">
  {/* Reduced shadow offset and blur for better mobile appearance */}
  <filter id="play-shadow" x="-25%" y="-25%" width="150%" height="150%">
    <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" flood-color="black" flood-opacity="0.4" />
  </filter>
</svg>
  <section className="pt-12 pb-10 md:pt-16 md:pb-20 lg:pt-24 lg:pb-22 px-4 md:px-6 bg-gradient-to-b from-lighthouse-50/50 to-white min-h-screen flex items-center">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-4xl mt-4 md:mt-5">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="gradient-text">Islamic lectures</span> don’t change you. <span className="gradient-text">Daily actions</span> do.
            </h1>
            
            <p className="text-navy-600 text-xl sm:text-lg md:text-xl mb-6 md:mb-6 max-w-xl mx-auto">
            Muslim Lighthouse doesn’t just teach Islam—it <strong>installs it</strong>. In your <strong>actions</strong>. In your <strong>habits</strong>. In your <strong>life</strong>.
            </p>
            
            
            
            {/*<div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-4 md:mb-6">
              <a href="https://www.muslimlighthouse.app/checkout/premium-membership" className="cta-button animate-pulse-light px-6 py-3 md:px-8 md:py-4 text-lg md:text-lg">
                Join Now
              </a>
              
              <a href="#free-lesson" className="secondary-button flex items-center gap-2 justify-center px-5 py-2.5 md:px-6 md:py-3 text-lg md:text-lg">
                <Play size={16} className="fill-lighthouse-500 drop-shadow-2xl md:w-[18px] md:h-[18px]" stroke="none" />
                Watch Free Lesson
              </a>
            </div>*/}

            <div className="flex items-center justify-center gap-4 mb-8 mx-auto max-w-full">
  <div className="flex -space-x-3">
    {/* Example avatars, replace src with actual student images if available */}
    <Avatar>
      <AvatarImage src="/images/avatar1.jpeg" alt="Student 1" loading="lazy" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar2.jpeg" alt="Student 2" loading="lazy" />
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar3.jpeg" alt="Student 3" loading="lazy" />
      <AvatarFallback>EF</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar4.png" alt="Student 4" loading="lazy" />
      <AvatarFallback>GH</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/images/avatar5.jpg" alt="Student 5" loading="lazy" />
      <AvatarFallback>GH</AvatarFallback>
    </Avatar>
  </div>
  <span className="text-navy-600 text-base md:text-lg font-semibold ml-4 whitespace-nowrap">230+ students globally</span>
</div>
          </div>
          
          <div className="w-full max-w-3xl animate-float">
            <div className="video-container overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border-2 md:border-4 border-white">
              {isPlaying ? (
                <div className="w-full aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1077591337?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Video Sales Letter"
                    className="w-full h-full absolute inset-0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <AspectRatio ratio={16 / 9}>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group"
                    onClick={handlePlayClick}
                  >
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden drop-shadow-md md:drop-shadow-xl group-hover:scale-105 transition-transform">
                      {/* On mobile, use Tailwind drop-shadow only. On md+, add SVG filter for extra depth. */}
                      <Play
                        size={20}
                        className="fill-lighthouse-500 ml-1 md:w-[30px] md:h-[30px]"
                        stroke="none"
                        style={{ filter: 'url(#play-shadow)' }}
                      />
                    </div>
                  </div>
                  {/* Replace the src below with a custom thumbnail for the Vimeo video */}
                  <img src="/vimeo-thumbnail.jpg" alt="Islamic education video preview" className="w-full h-full object-cover" />
                </AspectRatio>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
</>;
};
export default Hero;