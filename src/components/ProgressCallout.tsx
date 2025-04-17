import React from 'react';
import { ArrowRight } from 'lucide-react';
const ProgressCallout = () => {
  const transformations = [{
    before: "Student lacked confidence in her Deen",
    time: "9 months",
    after: "Now feeling confident and helped someone convert"
  }, {
    before: "Student who had little to no connection to Allah ﷻ",
    time: "2 months",
    after: "Now crying for the first time in prayer"
  }, {
    before: "Students that had no pious friends",
    time: "12 months",
    after: "Now making best friends from ML community and meeting up multiple times in real life"
  }];
  return <section className="section-padding bg-navy-500 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tired of <span className="text-lighthouse-300">not progressing</span>?
          </h2>
          
          <div className="h-1 w-16 bg-gradient-to-r from-lighthouse-400 to-lighthouse-300 rounded-full mx-auto my-8"></div>
          
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Here are some Muslim Lighthouse transformations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {transformations.map((item, index) => <div key={index} className="bg-white/10 backdrop-blur border-white/20 p-6 rounded-2xl ">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="md:w-1/3 text-center">
                    <p className="text-white/90 font-medium">{item.before}</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <p className="text-lighthouse-300 font-bold mb-2">{item.time}</p>
                    <div className="flex">
                      <ArrowRight size={20} className="text-lighthouse-300" />
                      <ArrowRight size={20} className="text-lighthouse-300" />
                      <ArrowRight size={20} className="text-lighthouse-300" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 text-center">
                    <p className="text-white font-semibold">{item.after}</p>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="mt-16 text-center">            
            <a href="https://www.muslimlighthouse.app/checkout/premium-membership" className="cta-button">
              I want to make progress too!
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ProgressCallout;