import React from 'react';
import { Briefcase, GraduationCap, Globe, CheckCircle } from 'lucide-react';
import Books from './Books';
import FAQ from './FAQ';

interface BioContent {
  type: 'paragraph' | 'list';
  content: string | string[];
}

interface Teacher {
  name: string;
  role: string;
  bio: BioContent[];
  image: string;
  credentials: {
    icon: React.ElementType;
    text: string;
  }[];
}

const Teachers = () => {
  const teachers: Teacher[] = [{

    name: "Ustadh Rhyad",
    role: "Primary Instructor",
    bio: [
      { type: 'paragraph', content: "Ustadh Rhyad is an Islamic teacher, da’ee, and committed student of knowledge who studied all the major Islamic sciences under Shaykh Baha al-Majlisi in Mauritania. He holds an ijazah (formal authorisation) in all the sciences he studied with Shaykh Baha and is currently continuing his Qur’an studies in Madinah while completing his advanced studies with him." },
      { type: 'paragraph', content: "After experiencing a deep personal transformation through Islamic knowledge, Ustadh Rhyad founded Muslim Lighthouse—not to give people more information, but to guide them in implementing what they learn. Because that’s what leads to real change." },

    ],
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
    bio: [
      { type: 'paragraph', content: "Shaykh Baha Al-Majlisi is a Mauritanian scholar and is the teacher of Ustadh Rhyad. He started studying Islam at a very young age. He memorised the Quran at 7 and had memorised books from the sciences before reaching the age of maturity. He became a scholar at the age of 20 and has been building other scholars for more than 20 years ever since." },
      { type: 'paragraph', content: "Shaykh Baha is Muslim Lighthouse’s backbone. He is in charge of the syllabus, provides approval for the content being taught and helps with the more complex questions so that the students in Muslim Lighthouse have clarity and confidence in their personal lives too." }
    ],
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

  return (
    <section id="teachers" className="section-padding bg-white">
      <div className="container mx-auto md:px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why  <span className="gradient-text">Muslim Lighthouse</span> Is Different?
          </h2>
          
          <div className="divider"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <h3 className="inline-block text-2xl md:text-3xl font-semibold text-white tracking-tight rounded-full px-7 py-2 bg-lighthouse-800 shadow-sm">Your teachers</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
          {teachers.map(teacher => <div key={teacher.name} className="glass-card overflow-hidden group">
              <div className="w-full overflow-hidden rounded-xl bg-white">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full object-cover rounded-xl shadow-lg"
                  style={{ display: 'block', maxHeight: '350px', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-navy-700">{teacher.name}</h3>
                </div>
                <div className="text-left text-navy-400 text-sm md:text-base mt-4">
                  {teacher.bio.map((item, index) => {
                    if (item.type === 'paragraph') {
                      return <p key={index} className="mb-2 last:mb-0 text-center md:text-left text-base">{item.content}</p>;
                    } else if (item.type === 'list') {
                      return (
                        <ul key={index} className="list-disc list-inside ml-4 mb-2 last:mb-0">
                          {item.content.map((listItem, liIndex) => (
                            <li key={liIndex}>{listItem}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-transparent md:bg-lighthouse-50 rounded-2xl p-0 md:p-12 shadow-none md:shadow-lg">
          <div className="flex justify-center mb-8">
            <h3 className="inline-block text-2xl md:text-3xl font-semibold text-white tracking-tight rounded-full px-7 py-2 bg-lighthouse-800 shadow-sm">What you'll be studying</h3>
          </div>
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <span className="inline-block bg-lighthouse-100 text-lighthouse-700 font-semibold rounded-full px-4 py-1 text-sm shadow-sm mb-2 mr-2">Beginner Friendly</span>
            <span className="inline-block bg-lighthouse-100 text-lighthouse-700 font-semibold rounded-full px-4 py-1 text-sm shadow-sm mb-2 mr-2">No Arabic Required</span>
            <span className="inline-block bg-lighthouse-100 text-lighthouse-700 font-semibold rounded-full px-4 py-1 text-sm shadow-sm mb-2">Classical Texts</span>
          </div>
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 text-navy-800">
            <div className="relative flex flex-col md:flex-row items-center justify-center p-4 md:p-8 rounded-3xl bg-white shadow-xl group transition-all duration-500 hover:shadow-2xl">

              <div className="absolute -top-8 -left-8 z-20 text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:scale-110">💡</div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <p className="text-base md:text-lg font-medium leading-relaxed text-center px-4">
                  <span className="font-semibold text-navy-900">Just as Ustadh Rhyad</span> studied advanced scholarly texts with Shaykh Baha in Mauritania, he now teaches those same texts, covering all the major Islamic sciences, inside Muslim Lighthouse.  <span className="font-semibold text-lighthouse-600">But don't worry about your level.</span>
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row-reverse items-center justify-center p-4 md:p-8 rounded-3xl bg-white shadow-xl group transition-all duration-500 hover:shadow-2xl">

              <div className="absolute -top-8 -right-8 z-20 text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:scale-110">🌟</div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <p className="text-base md:text-lg font-medium leading-relaxed text-center px-4">
                  Everything is taught in English, with even the most advanced topics broken down into simple, clear steps – and wherever possible, you'll be shown how to actually <span className="font-semibold text-lighthouse-600">implement what you learn</span>.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-center p-4 md:p-8 rounded-3xl bg-white shadow-xl group transition-all duration-500 hover:shadow-2xl">

              <div className="absolute -top-8 -left-8 z-20 text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:scale-110">🚀</div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <p className="text-base md:text-lg font-medium leading-relaxed text-center px-4">
                  Whether you're a <span className="font-semibold text-lighthouse-600">complete beginner</span> who's never studied Islam before, or someone who's already tasted the sweetness of knowledge – Muslim Lighthouse meets you where you are and helps you grow from there.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row-reverse items-center justify-center p-4 md:p-8 rounded-3xl bg-white shadow-xl group transition-all duration-500 hover:shadow-2xl">

              <div className="absolute -top-8 -right-8 z-20 text-5xl md:text-6xl leading-none transition-transform duration-300 group-hover:scale-110">✨</div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <p className="text-base md:text-lg font-medium leading-relaxed text-center px-4">
                  You'll gain <span className="font-semibold text-lighthouse-600">clarity, structure, and transformation</span>. Not just information.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Books onlyCarousel />
          </div>
        </div>
        <div className="mt-20">
          <FAQ />
        </div>
      </div>
    </section>
  );
};
export default Teachers;
