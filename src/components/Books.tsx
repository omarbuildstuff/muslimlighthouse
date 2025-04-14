
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Books = () => {
  const books = [
    {
      title: "Al-Aqeedah Al-Wasitiyah",
      author: "Ibn Taymiyyah",
      subject: "Aqeedah",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Matn Ibn Ashir",
      author: "Abdullah Ibn Ashir",
      subject: "Maliki Fiqh",
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Al-Ajrumiyyah",
      author: "Ibn Aajurrum",
      subject: "Arabic Grammar",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Riyad al-Saliheen",
      author: "Imam Al-Nawawi",
      subject: "Hadith",
      cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Tafsir Ibn Kathir",
      author: "Ibn Kathir",
      subject: "Tafsir",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      title: "Al-Waraqat",
      author: "Imam Al-Juwayni",
      subject: "Usul al-Fiqh",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  return (
    <section className="section-padding bg-white w-full">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Books You'll Be <span className="gradient-text">Studying</span>
          </h2>
          
          <div className="divider"></div>
          
          <p className="text-navy-400 max-w-3xl mx-auto text-lg">
            Our curriculum includes traditional Islamic texts taught by qualified scholars with proper ijazahs (certifications).
          </p>
        </div>
        
        <div className="relative w-full px-2 md:px-0 mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              autoplay: true,
              autoplaySpeed: 3000,
              pauseOnHover: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {books.map((book) => (
                <CarouselItem key={book.title} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                  <Card className="glass-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                    <div className="relative h-80 w-full overflow-hidden">
                      <img 
                        src={book.cover} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Books;
