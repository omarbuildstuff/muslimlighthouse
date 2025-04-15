
import React from 'react';
import { Play } from 'lucide-react';

const FreeLesson = () => {
  return (
    <section id="free-lesson" className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Try a <span className="gradient-text">Free Lesson</span> First
              </h2>
              
              <p className="text-navy-400 text-lg mb-8">
                Not sure if Muslim Lighthouse is right for you? Get a taste of our teaching style and content quality with a free lesson from our Aqeedah course.
              </p>
              
              <a href="#" className="cta-button inline-block py-3">
                Get Free Lesson
              </a>
            </div>
            
            <div className="lg:w-1/2 max-w-xl">
              <div className="video-container relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play size={30} className="fill-lighthouse-500 ml-1" />
                  </div>
                </div>
                <img 
                  src="https://img.youtube.com/vi/w-w47CSUuIo/maxresdefault.jpg" 
                  alt="Free lesson preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeLesson;
