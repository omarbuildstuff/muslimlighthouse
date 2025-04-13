
import React from 'react';
import { BookOpen, BookText, FileText, Heart, Landmark, Language, PenTool, Search, Users } from 'lucide-react';

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
      icon: Language,
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
    <section id="sciences" className="section-padding bg-lighthouse-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Be <span className="gradient-text">Learning</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            Our curriculum covers the 9 traditional Islamic sciences, providing you with a comprehensive understanding of your faith.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sciencesList.map((science, index) => (
            <div 
              key={science.name}
              className="glass-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">
                <science.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-navy-700">
                {science.name}
              </h3>
              
              <p className="text-navy-400">
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
