
import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';
const Mauritania = () => {
  const features = [{
    icon: BookOpen,
    title: "Preservation of Traditional Texts",
    description: "Mauritania is known for its preservation of classical Islamic texts and manuscripts, maintaining chains of transmission that extend back centuries."
  }, {
    icon: GraduationCap,
    title: "Rigorous Memorization",
    description: "Students in the Mauritanian tradition memorize entire texts before studying their meanings, creating a strong foundation for deeper understanding."
  }, {
    icon: Users,
    title: "Student-Teacher Relationship",
    description: "The Mauritanian model emphasizes close relationships between teachers and students, with individual attention and personalized guidance."
  }];
  return <section className="section-padding bg-gradient-to-b from-white to-lighthouse-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why is <span className="gradient-text">Mauritania</span> Special?
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            The Mauritanian tradition of Islamic scholarship is renowned for its preservation of knowledge and unique educational methodology.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lighthouse-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lighthouse-100 rounded-full opacity-70"></div>
              
              <img alt="Mauritanian scholars studying" src="/lovable-uploads/155b36ad-21b9-4d6d-b36e-5cfbae84f3ee.png" className="w-full h-auto rounded-3xl shadow-xl relative z-10 object-contain" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-navy-500 text-lg mb-8">
              For centuries, Mauritania has been a center of Islamic scholarship, with students traveling from across the world to study with its renowned scholars. The teaching methods developed there have proven effective in producing scholars with deep understanding and strong foundations.
            </p>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Mauritania;
