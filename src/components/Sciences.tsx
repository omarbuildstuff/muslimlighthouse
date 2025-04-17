
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Sciences = () => {
  const sciencesList = [
    {
      name: "Aqeedah",
      description: "Learning about Allahﷻ  and your existential purpose in life",
      image: "../lovable-uploads/aqeedah-bg.png"
    },
    {
      name: "Tafsir",
      description: "Uncovering the gems of the Quran by reading between the lines",
      image: "../lovable-uploads/tafsir-bg.jpg"
    },
    {
      name: "Seerah",
      description: "Learning about the greatest role model, Prophet Muhammad ﷺ and applying lessons from his life",
      image: "../lovable-uploads/seerah-bg.jpg"
    },
    {
      name: "Tazkiyah",
      description: "Cleansing the heart of its diseases and beautifying it with a deeper connection with Allahﷻ",
      image: "../lovable-uploads/tazkiyah-bg.jpg"
    },
    {
      name: "Fiqh",
      description: "Studying how to worship Allahﷻ  in our actions",
      image: "../lovable-uploads/fiqh-bg.jpg"
    },
    {
      name: "Hadith Sciences",
      description: "Studying the technicalities of Hadiths and why they can be trusted",
      image: "../lovable-uploads/hadith-sciences-bg.jpg"
    },
    {
      name: "Usul al-Fiqh",
      description: "Studying how rulings are extracted from the Quran and Sunnah and why there is difference of opinion",
      image: "../lovable-uploads/usul-bg.jpg"
    },
    {
      name: "Language",
      description: "Unlocking the original language of the Quran and Sunnah (only how to read Arabic is taught)",
      image: "../lovable-uploads/language-bg.jpg"
    },
    {
      name: "Tajweed",
      description: "Understanding how to recite the Quran perfectly",
      image: "../lovable-uploads/tajweed-bg.jpg"
    },
  ];

  return (
    <section id="sciences" className="section-padding bg-lighthouse-50/50 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What You'll Be <span className="gradient-text">Learning</span>
          </h2>
          
          <div className="divider"></div>
          <p className="text-navy-400 text-lg mb-8">
          Some sciences are still not completely finished and are being taught in the weekly live lessons
          </p>
        </div>
        
        <div className="relative w-full mb-12 max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sciencesList.map((science, index) => (
                <CarouselItem key={science.name} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="glass-card border-4 border-lighthouse-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full min-h-[320px]"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={science.image} 
                        alt={science.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy-700">
                        {science.name}
                      </h3>
                      <p className="text-navy-400 text-base md:text-lg">
                        {science.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Sciences;
