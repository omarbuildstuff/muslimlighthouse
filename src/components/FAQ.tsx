import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Is this for advanced students?",
      answer: "No - Muslim Lighthouse is designed for all levels. Whether you're just starting or have studied before, the lessons are clear, structured, and practical."
    },
    {
      question: "Do I need to know Arabic?",
      answer: "No - everything is taught in English. Key Arabic terms are explained clearly, and you'll learn gradually as you go."
    },
    {
      question: "Will I be able to ask questions?",
      answer: "Yes - Premium students get direct access to the teacher to ask questions, get feedback, and gain clarity."
    },
    {
      question: "What's the difference between Standard and Premium?",
      answer: "Standard gives you access to course recordings only. Premium includes live sessions, community access, weekly initiatives, and direct teacher support."
    },
    {
      question: "Do I have to attend live sessions?",
      answer: "No - all sessions are recorded. You can watch at your own pace and still participate in weekly challenges and community discussions."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes - both Standard and Premium plans are month-to-month with no commitment."
    },
    {
      question: "Is this for brothers and sisters?",
      answer: "Yes - Muslim Lighthouse is for both brothers and sisters. Each has their own dedicated weekly live session, where questions, doubts, and personal concerns are addressed in a comfortable and open setting."
    },
    {
      question: "What if I'm already studying elsewhere?",
      answer: "Muslim Lighthouse complements your learning with a unique focus on implementation and habit-building."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <div className="text-center mb-12">
        <h3 className="inline-block text-2xl md:text-3xl font-semibold text-white tracking-tight rounded-full px-7 py-2 bg-lighthouse-800 shadow-sm">
          Any questions?
        </h3>
      </div>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-sm overflow-hidden border border-lighthouse-100 transition-all duration-200 hover:shadow-md ${openIndex === index ? 'ring-2 ring-lighthouse-500/20' : ''}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg md:text-xl font-semibold text-navy-800 group-hover:text-lighthouse-700 transition-colors pr-4">
                {item.question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === index ? 'bg-lighthouse-100 text-lighthouse-700' : 'bg-lighthouse-50 text-lighthouse-600 group-hover:bg-lighthouse-100'}`}>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ transition: 'max-height 300ms ease-in-out, opacity 200ms ease-in-out' }}
              aria-hidden={openIndex !== index}
            >
              <div className="px-6 pb-6 pt-2 border-t border-lighthouse-100">
                <p className="text-navy-700 leading-relaxed text-left text-base md:text-lg">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
