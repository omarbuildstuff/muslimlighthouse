
import React from 'react';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';
const Teachers = () => {
  const teachers = [{
    name: "Ustadh Rhyad",
    role: "Primary Instructor",
    bio: "Ustadh Rhyad is an Islamic teacher, Da’ee and student of knowledge that has studied all the Islamic sciences under Shaykh Baha al-Majlisi. Ever since experiencing such a deep and positive impact from the knowledge he has gained, he has since created Muslim Lighthouse to bring the ‘Mauritanian experience’ into the comfort of your own homes.Teaching and helping others is Ustadh Rhyad’s passion and you’ll be able to see that as you begin your studies inside of Muslim Lighthouse.",
    image: "../lovable-uploads/rhyad.jpg",
    credentials: [{
      icon: GraduationCap,
      text: "Ijazah in multiple classical texts"
    }, {
      icon: Briefcase,
      text: "10+ years teaching experience"
    }, {
      icon: Globe,
      text: "Studied in Mauritania, Egypt and Jordan"
    }]
  }, {
    name: "Shaykh Baha Al-Majlisi",
    role: "Senior Scholar",
    bio: "Shaykh Baha Al-Majlisi is a Mauritanian scholar and is the teacher of Ustadh Rhyad. He started studying Islam at a very young age. He memorised the Quran at 7 and had memorised books from the sciences before reaching the age of maturity. He became a scholar at the age of 20 and has been building other scholars for more than 20 years ever since. Shaykh Baha is Muslim Lighthouse’s backbone. He is in charge of the syllabus, provides approval for the content being taught and helps with the more complex questions so that the students in Muslim Lighthouse have clarity and confidence in their personal lives too.",
    image: "../lovable-uploads/shaykh.jpg",
    credentials: [{
      icon: GraduationCap,
      text: "Traditional ijazahs from senior scholars"
    }, {
      icon: Briefcase,
      text: "Author of works on Islamic jurisprudence"
    }, {
      icon: Globe,
      text: "Trained in the Mauritanian tradition"
    }]
  }];
  return <section id="teachers" className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="gradient-text">Teachers</span>
          </h2>
          
          <div className="divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
          {teachers.map(teacher => <div key={teacher.name} className="glass-card overflow-hidden group">
              <div className="w-full overflow-hidden rounded-xl bg-white">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full object-cover rounded-xl shadow-lg border-2 border-white"
                  style={{ display: 'block', maxHeight: '350px', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold text-navy-700">{teacher.name}</h3>
                  
                </div>
                
                <p className="text-navy-400 mb-6">{teacher.bio}</p>
              
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Teachers;
