
import React from 'react';

const LearningExperience = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete <span className="gradient-text">Learning Experience</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg mb-6">
            Our program offers a comprehensive approach to Islamic learning
          </p>
          
          <ul className="max-w-3xl mx-auto text-left space-y-3 mb-12">
            <li className="flex items-start gap-2">
              <span className="text-lighthouse-500 font-bold text-xl">•</span>
              <span className="text-navy-600">Live weekly sessions with qualified scholars</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lighthouse-500 font-bold text-xl">•</span>
              <span className="text-navy-600">Structured curriculum with clear progression paths</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lighthouse-500 font-bold text-xl">•</span>
              <span className="text-navy-600">Supportive community of dedicated students</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lighthouse-500 font-bold text-xl">•</span>
              <span className="text-navy-600">Personalized feedback on your learning journey</span>
            </li>
          </ul>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <img 
            src="/lovable-uploads/59ddb171-afc4-4c29-8557-1516480ba7fa.png"
            alt="Muslim Lighthouse Learning Experience" 
            className="w-full h-auto rounded-xl shadow-xl border-2 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
