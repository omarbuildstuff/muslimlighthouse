
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProgressCallout = () => {
  const steps = [
    {
      title: "Bite-sized daily lessons",
      description: "Short, focused video lessons that take only 5-15 minutes of your day."
    },
    {
      title: "Structured curriculum",
      description: "Follow a proven pathway through the Islamic sciences designed by scholars."
    },
    {
      title: "Personal tracking",
      description: "Monitor your progress and build consistent learning habits."
    },
    {
      title: "Community support",
      description: "Join fellow students on the same journey for motivation and discussion."
    },
  ];

  return (
    <section className="section-padding bg-navy-500 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tired of <span className="text-lighthouse-300">not progressing</span>?
          </h2>
          
          <div className="h-1 w-16 bg-gradient-to-r from-lighthouse-400 to-lighthouse-300 rounded-full mx-auto my-8"></div>
          
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Many Muslims struggle to advance in their Islamic studies because of inconsistent learning, lack of structure, or overwhelming resources.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-lighthouse-300/30"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col md:flex-row gap-6 items-start md:items-center relative">
                  <div className="md:w-16 md:h-16 flex-shrink-0 bg-lighthouse-500 rounded-full flex items-center justify-center shadow-lg shadow-lighthouse-500/20 z-10">
                    {index === steps.length - 1 ? (
                      <CheckCircle size={28} className="text-white" />
                    ) : (
                      <div className="text-white font-bold text-xl">{index + 1}</div>
                    )}
                  </div>
                  
                  <div className="md:pl-10 flex-1">
                    <div className="glass-card bg-white/10 backdrop-blur border-white/20 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute left-8 top-16 h-14 w-1 flex justify-center">
                      <ArrowRight size={20} className="text-lighthouse-300 rotate-90 mt-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
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
