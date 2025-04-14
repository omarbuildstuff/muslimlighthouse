import React from 'react';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';
const Teachers = () => {
  const teachers = [{
    name: "Ustadh Ehsan",
    role: "Primary Instructor",
    bio: "Ustadh Ehsan has studied under scholars in Mauritania, Egypt and Jordan. He specializes in Aqeedah and Tafsir, with ijazahs in multiple classical texts. His teaching style combines deep knowledge with clarity and accessibility.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
    bio: "Shaykh Baha Al-Majlisi is a distinguished scholar with over 20 years of teaching experience. He received traditional ijazahs from the scholars of Mauritania and has authored several works on Islamic jurisprudence and theology.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="gradient-text">Teachers</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            Learn from qualified scholars who have been trained in the traditional Islamic educational system and hold ijazahs (certifications) in the texts they teach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teachers.map(teacher => <div key={teacher.name} className="glass-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-2xl font-bold text-navy-700">{teacher.name}</h3>
                  
                </div>
                
                <p className="text-navy-400 mb-6">{teacher.bio}</p>
                
                <div className="space-y-3">
                  {teacher.credentials.map((credential, index) => <div key={index} className="flex items-center gap-3">
                      <div className="text-lighthouse-500">
                        <credential.icon size={18} />
                      </div>
                      <span className="text-navy-500">{credential.text}</span>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Teachers;