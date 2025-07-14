import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
interface BooksProps {
  onlyCarousel?: boolean;
}

const Books = ({ onlyCarousel }: BooksProps) => {
  const books = [{
    title: "Tashīl al-Ṭuruqāt fī Naẓm al-Waraqāt fī ʿIlm Uṣūl al-Fiqh",
    author: "Sharaf al-Dīn Yaḥyá ibn Mūsá ibn Ramaḍān al-ʿAmrīṭī al-Shāfiʿī",
    subject: "Usool al-Fiqh",
    cover: "/images/usul.jpeg"
  }, {
    title: "Naẓmu As-hāl al-Masālik fī Madh'hab al-Imām Mālik",
    author: "al-Shaykh Muḥammad ibn ʿAbd al-Raḥmān al-Rashīdī",
    subject: "Fiqh",
    cover: "/images/fiqh.jpeg"
  }, {
    title: "Ṭalʿat al-Anwār fī ʿIlm Athār al-Nabī al-Mukhtār",
    author: "ʿAbd al-Raḥmān ibn Abī Bakr al-Miṣrātī al-ʿUqaylī",
    subject: "Hadith Sciences",
    cover: "/images/hadith-sciences.jpeg"
  }, {
    title: "Sharḥ al-Arbaʿīn al-Nawawiyyah",
    author: "Shaykh Muḥammad ibn Ṣāliḥ al-ʿUthaymīn",
    subject: "Hadith Sciences",
    cover: "/images/hadith-sciences2.jpeg"
  }, {
    title: "al-Sullam al-Murawnaq fī ʿIlm al-Manṭiq",
    author: "al-Sullam al-Murawnaq fī ʿIlm al-Manṭiq",
    subject: "Logic",
    cover: "/images/logic.jpeg"
  }, {
    title: "Muntaqā al-Akhbār fī Sharḥ Qurrat al-Abṣār",
    author: "ʿAbd Allāh Walad Ibrāhīm Walad ʿAbd Allāh",
    subject: "Seerah",
    cover: "/images/seerah2.jpeg"
  }, {
    title: "Tuḥfat al-Surūr bi-Sharḥ Naẓm al-Burūr",
    author: "Shaykh al-ʿAllāmah Abū ʿAbdillāh Muḥammad ibn Aḥmad al-Mālikī al-Ṣanhājī al-Maghribī",
    subject: "Tazkiyah",
    cover: "/images/tazkiyah.jpeg"
  }, {
    title: "Naẓm Maṭharat al-Qulūb",
    author: "al-ʿAllāmah Muḥammad Mawlūd ibn Aḥmad Fāl",
    subject: "Tazkiyah",
    cover: "/images/tazkiyah2.jpeg"
  }, {
    title: "al-Lāʾilī al-Ḥisān ʿalā Muḥārim al-Lisān",
    author: "al-ʿAllāmah al-Muḥaqqiq al-Shaykh Muḥammad al-Ḥasan ibn Aḥmad al-Shinqīṭī al-Jakanī",
    subject: "Tazkiyah",
    cover: "/images/tazkiyah3.jpeg"
  }, {
    title: "Naẓmu Ghazawāt al-Nabī ﷺ",
    author: "al-ʿAllāmah al-Ḥāfiẓ Aḥmad al-Badawī ibn Muḥammad al-Majlīsī al-Shinqīṭī",
    subject: "Seerah",
    cover: "/images/seerah.jpeg"
  }];
  if (onlyCarousel) {
    return (
      <div className="relative w-full mb-12 max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-xl group transition-all duration-500 hover:shadow-2xl">
        <div className="inline-flex flex-col items-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-lighthouse-900 mb-3">
            Here are the books you'll be studying...
          </h3>
          <div className="w-24 h-1 bg-lighthouse-600/30 rounded-full"></div>
        </div>
        <Carousel opts={{
          align: "start",
          loop: true,
          dragFree: true
        }} plugins={[Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: false
        })]} className="w-full">
          <CarouselContent className="-ml-6">
            {books.map(book => (
              <CarouselItem key={book.title} className="pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="bg-transparent border-0 shadow-none transition-all duration-300 overflow-hidden h-full">
                  <div className="relative aspect-[4/5] w-full overflow-hidden flex items-center justify-center">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-contain rounded-xl shadow-lg" style={{ display: 'block', maxHeight: '410px' }} loading="lazy" />
                  </div>
                  <CardContent className="p-7 text-center">
                    {/* <h3 className="text-xl md:text-2xl font-semibold text-navy-700 mb-2">{book.title}</h3>
                    <p className="text-base md:text-lg text-navy-400 mb-2">{book.author}</p> */}
                    <span className="text-sm md:text-base font-semibold bg-lighthouse-50 text-navy-800 px-4 py-1.5 rounded-full inline-block mt-2 shadow-sm">{book.subject}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }

  return <section className="section-padding bg-white w-full pb-2 pt-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Books You'll Be <span className="gradient-text">Studying</span>
          </h2>
          
          <div className="divider"></div>
          <p className="text-navy-400 text-lg mb-8">
          New programs based on the books below are introduced in our weekly classes
          </p>
        </div>
        
        <div className="relative w-full mb-12 max-w-6xl mx-auto">
          <Carousel opts={{
          align: "start",
          loop: true,
          dragFree: true
        }} plugins={[Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: false
        })]} className="w-full">
            <CarouselContent className="-ml-4">
              {books.map(book => <CarouselItem key={book.title} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="bg-transparent border-0 shadow-none transition-all duration-300 overflow-hidden h-full">
                    <div className="relative aspect-[3/4] w-full overflow-hidden flex items-center justify-center">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-contain rounded-xl shadow-lg" style={{ display: 'block' }} loading="lazy" />
                    </div>
                    
                    <CardContent className="p-6 text-center">
                      {/* 
                        <h3 className="text-xl md:text-2xl font-semibold text-navy-700 mb-2">{book.title}</h3>
                        <p className="text-base md:text-lg text-navy-400 mb-2">{book.author}</p>
                      */}
                      <span className="text-sm md:text-base font-semibold bg-lighthouse-900 text-white px-3 py-1 rounded-full inline-block shadow-sm">{book.subject}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Books;
