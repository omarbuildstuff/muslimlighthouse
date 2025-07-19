import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const LearnActGrow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Learn.",
      description: "Deep, structured Islamic knowledge made simple.",
      image: "/images/1.png",
      alt: "Learn - Deep, structured Islamic knowledge made simple."
    },
    {
      title: "Act.",
      description: "Take action through weekly habits and live sessions.",
      image: "/images/2.png",
      alt: "Act - Take action through weekly habits and live sessions."
    },
    {
      title: "Grow.",
      description: "Be part of a brotherhood and sisterhood that helps you stay consistent.",
      image: "/images/3.png",
      alt: "Grow - Be part of a brotherhood and sisterhood that helps you stay consistent."
    },
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, handleNext]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <section className="py-16 bg-lighthouse-50/50 relative overflow-hidden">
      {/* Background Gradients and Shapes */}
      

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex justify-center space-x-8 md:space-x-16 mb-8">
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-2 transition-all duration-300 ${activeIndex === 0 ? 'scale-110 mb-2' : 'scale-100 opacity-50'}`}>
              <span className="gradient-text-blue">Learn</span>.
            </h2>
            <div className={`w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ${activeIndex === 0 ? 'scale-110 shadow-lg mt-2' : 'scale-100 opacity-50'}`}>1</div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-2 transition-all duration-300 ${activeIndex === 1 ? 'scale-110 mb-2' : 'scale-100 opacity-50'}`}>
              <span className="gradient-text-purple">Act</span>.
            </h2>
            <div className={`w-12 h-12 rounded-full bg-lighthouse-600 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ${activeIndex === 1 ? 'scale-110 shadow-lg mt-2' : 'scale-100 opacity-50'}`}>2</div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-2 transition-all duration-300 ${activeIndex === 2 ? 'scale-110 mb-2' : 'scale-100 opacity-50'}`}>
              <span className="gradient-text-green">Grow</span>.
            </h2>
            <div className={`w-12 h-12 rounded-full bg-lighthouse-500 flex items-center justify-center text-white font-bold text-xl transition-all duration-300 ${activeIndex === 2 ? 'scale-110 shadow-lg mt-2' : 'scale-100 opacity-50'}`}>3</div>
          </div>
        </div>

        <div {...handlers} className="relative w-full max-w-3xl mx-auto min-h-[500px] py-8">
          {/* Mobile Swipe Indicator */}
          <div className="absolute top-4 right-4 z-30 md:hidden flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            <span className="text-xs text-gray-600 font-medium">Swipe</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-500 animate-pulse">
              <path d="M8 12h8M12 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="relative flex flex-col rounded-3xl bg-transparent overflow-hidden cursor-pointer h-full">

                <div className="p-8 text-center">
                  {/*<h3 className="relative z-10 text-4xl font-extrabold mb-4 leading-tight tracking-tight"><span className={`gradient-text-${item.title.toLowerCase().replace('.', '')}`}>{item.title}</span></h3>*/}
                  <div className="relative z-10 bg-white/90 px-6 py-4 rounded-2xl shadow-lg shadow-black/20 text-center w-fit mx-auto">
                    <p className="text-xl text-gray-800 font-semibold leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="relative z-10 w-full h-96 rounded-2xl overflow-hidden transform group-hover:scale-102 transition-transform duration-500 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hidden md:block"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}
          {activeIndex < items.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hidden md:block"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

export default LearnActGrow;
