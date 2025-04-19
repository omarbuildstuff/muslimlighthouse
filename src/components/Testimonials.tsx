
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Muslim Lighthouse has transformed my approach to studying Islam. The bite-sized lessons make consistent learning possible even with my busy schedule.",
      name: "Ahmed S.",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "The structured curriculum has helped me build a solid foundation in Islamic sciences. I appreciate how the teachers connect classical texts to contemporary issues.",
      name: "Fatima R.",
      title: "Medical Student",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "I've tried many online Islamic courses, but the quality of teaching at Muslim Lighthouse is exceptional. The Mauritanian methodology provides depth I haven't found elsewhere.",
      name: "Ibrahim M.",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "As a convert to Islam, finding authentic knowledge presented in an accessible way has been challenging. Muslim Lighthouse bridges that gap perfectly.",
      name: "Sarah J.",
      title: "Teacher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-navy-500 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-lighthouse-300">Students</span> Say
          </h2>
          
          <div className="h-1 w-16 bg-gradient-to-r from-lighthouse-400 to-lighthouse-300 rounded-full mx-auto my-8"></div>
          
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Hear from our students about their experience with Muslim Lighthouse.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">


          
        <script src="https://app.reviewgrower.com/js/v1/embed.js?token=8568ebcf-55e8-4d46-b3d9-a2dd1d4ccfb5" type="text/javascript"></script>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
