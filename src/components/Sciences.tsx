
import React from 'react';
import { BookOpen, BookText, FileText, Heart, Landmark, Languages, PenTool, Search, Users } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Sciences = () => {
  const sciencesList = [
    {
      name: "Aqeedah",
      description: "Study of Islamic theology and beliefs",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=1000"
    },
    {
      name: "Tafsir",
      description: "Quranic exegesis and interpretation",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1609599006485-e3476fea5e3a?q=80&w=1000"
    },
    {
      name: "Hadith",
      description: "Prophetic traditions and narrations",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1618019349280-ec5b22aa1a5e?q=80&w=1000"
    },
    {
      name: "Fiqh",
      description: "Islamic jurisprudence and legal rulings",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1585563058298-8e8d1156f1c2?q=80&w=1000"
    },
    {
      name: "Usul al-Fiqh",
      description: "Principles of Islamic jurisprudence",
      icon: Search,
      image: "https://images.unsplash.com/photo-1579443411194-9608cf82a985?q=80&w=1000"
    },
    {
      name: "Seerah",
      description: "Prophetic biography and history",
      icon: Users,
      image: "https://images.unsplash.com/photo-1604605801335-1596348aase43?q=80&w=1000"
    },
    {
      name: "Arabic Grammar",
      description: "Essential language tools for Islamic studies",
      icon: Languages,
      image: "https://images.unsplash.com/photo-1581853245729-cb704b54a043?q=80&w=1000"
    },
    {
      name: "Tasawwuf",
      description: "Islamic spirituality and purification",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1600196341385-c49341189ef9?q=80&w=1000"
    },
    {
      name: "Mantiq",
      description: "Logic and reasoning in Islamic tradition",
      icon: PenTool,
      image: "https://images.unsplash.com/photo-1540886450339-2fd9d783014b?q=80&w=1000"
    },
  ];

  return (
    <section id="sciences" className="section-padding bg-lighthouse-50/50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What You'll Be <span className="gradient-text">Learning</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-base md:text-lg px-2 md:px-0">
            Our curriculum covers the 9 traditional Islamic sciences, providing you with a comprehensive understanding of your faith.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-2 md:px-0 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sciencesList.map((science, index) => (
                <CarouselItem key={science.name} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="glass-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full min-h-[320px]"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={science.image} 
                        alt={science.name} 
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-500/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md">
                        <science.icon size={24} />
                      </div>
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
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-10 w-10 md:h-12 md:w-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Sciences;
