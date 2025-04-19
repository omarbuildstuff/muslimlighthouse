import React from 'react';
import { Check, BookOpen, Video, Users, MessageSquare, FileText, Calendar } from 'lucide-react';
const Pricing = () => {
  const features = [
    {
      icon: FileText,
      text: "Scholarly syllabus"
    },
    {
      icon: Video,
      text: "Live interactive weekly lessons"
    },
    {
      icon: Users,
      text: "Online Community of 200+ Students"
    },
    {
      icon: MessageSquare,
      text: "Learn and engage with Ustadh Rhyad"
    },
    {
      icon: Calendar,
      text: "Yearly in-person events"
    }
  ];
  return <section id="pricing" className="section-padding bg-lighthouse-50/50">
      <div className="container mx-auto px-4 md:max-w-xl">
        <div className="w-full sm:max-w-3xl mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="bg-gradient-to-r from-lighthouse-600 to-lighthouse-500 py-8 px-6 text-white text-center">
              <h3 className="text-3xl font-bold mb-2">Premium Subscription</h3>
              <p className="opacity-90 mb-4">Unlock your path to authentic knowledge</p>
              
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold">$37</span>
                <span className="text-xl opacity-80 ml-1">/month</span>
              </div>
            </div>
            
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map(feature => <div key={feature.text} className="flex items-center gap-4">
                    <div className="bg-lighthouse-100 p-2 rounded-full text-lighthouse-600">
                      <feature.icon size={18} />
                    </div>
                    <span className="text-navy-600">{feature.text}</span>
                  </div>)}
              </div>
              
              <div className="bg-navy-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold mb-3 text-navy-700">What's included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Scholarly syllabus based on the 9 science of Islam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Access to 100+ hours of content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Bite size lessons of 20-30mins</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Learn at your own pace and suited to your needs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Live weekly classes delivering new content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Opportunities to discuss and ask questions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Access to Ustadh Rhyad</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Access to Student support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Access to worldwide community of students</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">Interact, seek advice and grow in learning together</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-lighthouse-500" />
                    <span className="text-navy-600">In-person Events across the year to build community</span>
                  </li>
                </ul>
              </div>
              
              <a id="join-now" href="https://www.muslimlighthouse.app/checkout/premium-membership" className="cta-button w-full flex justify-center text-lg">
                Join Now
              </a>
              
              <p className="text-center text-navy-400 mt-4 text-sm">
                Cancel anytime. No long-term commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;