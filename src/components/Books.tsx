
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from 'react';

const Books = () => {
  const books = [
    {
      title: "Al-Aqeedah Al-Wasitiyah",
      author: "Ibn Taymiyyah",
      subject: "Aqeedah",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Matn Ibn Ashir",
      author: "Abdullah Ibn Ashir",
      subject: "Maliki Fiqh",
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Al-Ajrumiyyah",
      author: "Ibn Aajurrum",
      subject: "Arabic Grammar",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Riyad al-Saliheen",
      author: "Imam Al-Nawawi",
      subject: "Hadith",
      cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Tafsir Ibn Kathir",
      author: "Ibn Kathir",
      subject: "Tafsir",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Al-Waraqat",
      author: "Imam Al-Juwayni",
      subject: "Usul al-Fiqh",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      color: "from-orange-500 to-orange-600"
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);

  useEffect(() => {
    if (apiRef.current) {
      const interval = setInterval(() => {
        if (apiRef.current.canScrollNext()) {
          apiRef.current.scrollNext();
        } else {
          apiRef.current.scrollTo(0);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [apiRef]);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Books You'll Be <span className="gradient-text">Studying</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            Our curriculum includes traditional Islamic texts taught by qualified scholars with proper ijazahs (certifications).
          </p>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-2 md:px-0 mb-12">
          <Carousel
            ref={carouselRef}
            setApi={(api) => {
              apiRef.current = api;
            }}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {books.map((book, index) => (
                <CarouselItem key={book.title} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <Card className="glass-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                    <div className="relative h-80 w-full perspective-500 overflow-hidden">
                      <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${book.color} opacity-70`}></div>
                    </div>
                    
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl md:text-2xl font-semibold text-navy-700 mb-2">{book.title}</h3>
                      <p className="text-base md:text-lg text-navy-400 mb-2">{book.author}</p>
                      <span className="text-sm bg-lighthouse-100 text-lighthouse-700 px-3 py-1 rounded-full inline-block">{book.subject}</span>
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

export default Books;
