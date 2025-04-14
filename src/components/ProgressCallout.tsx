
import React from 'react';

const ProgressCallout = () => {
  const transformations = [
    {
      before: "Student lacked confidence in her Deen",
      duration: "9 months",
      after: "Now feeling confident and helped someone convert"
    },
    {
      before: "Student who had little to no connection to Allah ﷻ",
      duration: "2 months",
      after: "Now crying for the first time in prayer"
    },
    {
      before: "Students that had no pious friends",
      duration: "12 months",
      after: "Now making best friends from ML community and meeting up multiple times in real life"
    }
  ];

  return (
    <section className="section-padding bg-navy-500 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tired of <span className="text-lighthouse-300">not progressing</span>?
          </h2>
          
          <div className="h-1 w-16 bg-gradient-to-r from-lighthouse-400 to-lighthouse-300 rounded-full mx-auto my-8"></div>
          
          <p className="text-white/80 max-w-3xl mx-auto text-lg mb-12">
            Here are some Muslim Lighthouse transformations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {transformations.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur border-white/20 p-6 rounded-2xl">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{item.before}</h3>
                  <p className="text-lighthouse-300 font-medium mt-1">{item.duration}</p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 h-0.5 bg-lighthouse-300/30"></div>
                  <span className="text-lighthouse-300">---&gt;</span>
                  <div className="flex-1 h-0.5 bg-lighthouse-300/30"></div>
                </div>
                <p className="text-xl font-bold text-lighthouse-200">{item.after}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-8">
              Don't let another day pass without making progress in your Islamic knowledge.
            </p>
            
            <a href="#join-now" className="cta-button">
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressCallout;
