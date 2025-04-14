
import React from 'react';
import { Play } from 'lucide-react';

const FreeLesson = () => {
  return (
    <section id="free-lesson" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Try a <span className="gradient-text">Free Lesson</span> First
              </h2>
              
              <p className="text-navy-400 text-lg mb-8">
                Not sure if Muslim Lighthouse is right for you? Get a taste of our teaching style and content quality with a free lesson from our Aqeedah course.
              </p>
              
              <div className="bg-lighthouse-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-3 text-navy-700">What you'll learn in this free lesson:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-lighthouse-100 p-1 rounded-full text-lighthouse-600 mt-1">
                      <Play size={14} />
                    </div>
                    <span className="text-navy-600">The meaning of Tawhid and its importance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-lighthouse-100 p-1 rounded-full text-lighthouse-600 mt-1">
                      <Play size={14} />
                    </div>
                    <span className="text-navy-600">How to develop a strong foundation in Islamic beliefs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-lighthouse-100 p-1 rounded-full text-lighthouse-600 mt-1">
                      <Play size={14} />
                    </div>
                    <span className="text-navy-600">A glimpse of our teaching methodology</span>
                  </li>
                </ul>
              </div>
              
              <a href="#video" className="cta-button inline-block py-3 px-6">
                Watch Free Lesson
              </a>
            </div>
            
            <div className="lg:w-1/2">
              <div className="video-container relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center bg-navy-500/20 hover:bg-navy-500/10 transition-colors cursor-pointer group">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play size={30} className="fill-lighthouse-500 ml-1" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1000" 
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
