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
  return <section className="section-padding bg-gradient-to-b from-white to-lighthouse-50/50 pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why is <span className="gradient-text">Mauritania</span> Special?
          </h2>
          
          <div className="divider"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lighthouse-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lighthouse-100 rounded-full opacity-70"></div>
              
              <img alt="Mauritanian scholars studying" src="/lovable-uploads/155b36ad-21b9-4d6d-b36e-5cfbae84f3ee.png" className="w-full h-auto rounded-3xl shadow-xl relative z-10 object-contain max-w-md" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-navy-500 text-lg mb-8">
            Mauritania is renowned for its high level of Islamic scholarship. It has a unique system of ‘Mahdaras’ which are traditional Islamic schools that have produced scholars with unparalleled memorization and understanding, making it a hub for seekers of authentic Islamic knowledge.
            <br></br><br></br>Studying in Mauritania is difficult due to its harsh environment. Muslim Lighthouse is the first institution to bring this unique style of teaching in ‘Mahdaras’ into the comfort of your own home.
            </p>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Mauritania;