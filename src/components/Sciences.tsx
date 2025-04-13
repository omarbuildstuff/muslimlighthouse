
import React from 'react';
import { BookOpen, BookText, FileText, Heart, Landmark, Languages, PenTool, Search, Users } from 'lucide-react';

const Sciences = () => {
  const sciencesList = [
    {
      name: "Aqeedah",
      description: "Study of Islamic theology and beliefs",
      icon: Heart,
    },
    {
      name: "Tafsir",
      description: "Quranic exegesis and interpretation",
      icon: BookOpen,
    },
    {
      name: "Hadith",
      description: "Prophetic traditions and narrations",
      icon: FileText,
    },
    {
      name: "Fiqh",
      description: "Islamic jurisprudence and legal rulings",
      icon: Landmark,
    },
    {
      name: "Usul al-Fiqh",
      description: "Principles of Islamic jurisprudence",
      icon: Search,
    },
    {
      name: "Seerah",
      description: "Prophetic biography and history",
      icon: Users,
    },
    {
      name: "Arabic Grammar",
      description: "Essential language tools for Islamic studies",
      icon: Languages,
    },
    {
      name: "Tasawwuf",
      description: "Islamic spirituality and purification",
      icon: Heart,
    },
    {
      name: "Mantiq",
      description: "Logic and reasoning in Islamic tradition",
      icon: PenTool,
    },
  ];

  return (
    <section id="sciences" className="section-padding bg-lighthouse-50/50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What You'll Be <span className="gradient-text">Learning</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-base md:text-lg px-2 md:px-0">
            Our curriculum covers the 9 traditional Islamic sciences, providing you with a comprehensive understanding of your faith.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {sciencesList.map((science, index) => (
            <div 
              key={science.name}
              className="glass-card p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">
                <science.icon size={24} className="md:w-7 md:h-7" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 text-navy-700">
                {science.name}
              </h3>
              
              <p className="text-navy-400 text-sm md:text-base">
                {science.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sciences;
