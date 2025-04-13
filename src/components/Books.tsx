
import React from 'react';
import { BookOpen } from 'lucide-react';

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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {books.map((book, index) => (
            <div 
              key={book.title}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 w-full perspective-500 mb-4">
                <div className="h-full w-full preserve-3d transition-transform duration-500 group-hover:rotate-y-10 shadow-xl rounded-lg overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${book.color} opacity-70`}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <BookOpen size={32} className="text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-center text-navy-700 mb-1">{book.title}</h3>
              <p className="text-sm text-navy-400 text-center">{book.author}</p>
              <span className="text-xs mt-1 bg-lighthouse-100 text-lighthouse-700 px-2 py-1 rounded-full">{book.subject}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
