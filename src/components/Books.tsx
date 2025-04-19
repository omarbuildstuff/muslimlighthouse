import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
const Books = () => {
  const books = [{
    title: "Tashīl al-Ṭuruqāt fī Naẓm al-Waraqāt fī ʿIlm Uṣūl al-Fiqh",
    author: "Sharaf al-Dīn Yaḥyá ibn Mūsá ibn Ramaḍān al-ʿAmrīṭī al-Shāfiʿī",
    subject: "Usool al-Fiqh",
    cover: "../lovable-uploads/usul.jpeg"
  }, {
    title: "Naẓmu As-hāl al-Masālik fī Madh'hab al-Imām Mālik",
    author: "al-Shaykh Muḥammad ibn ʿAbd al-Raḥmān al-Rashīdī",
    subject: "Fiqh",
    cover: "../lovable-uploads/fiqh.jpeg"
  }, {
    title: "Ṭalʿat al-Anwār fī ʿIlm Athār al-Nabī al-Mukhtār",
    author: "ʿAbd al-Raḥmān ibn Abī Bakr al-Miṣrātī al-ʿUqaylī",
    subject: "Hadith Sciences",
    cover: "../lovable-uploads/hadith-sciences.jpeg"
  }, {
    title: "Sharḥ al-Arbaʿīn al-Nawawiyyah",
    author: "Shaykh Muḥammad ibn Ṣāliḥ al-ʿUthaymīn",
    subject: "Hadith Sciences",
    cover: "../lovable-uploads/hadith-sciences2.jpeg"
  }, {
    title: "al-Sullam al-Murawnaq fī ʿIlm al-Manṭiq",
    author: "al-Sullam al-Murawnaq fī ʿIlm al-Manṭiq",
    subject: "Logic",
    cover: "../lovable-uploads/logic.jpeg"
  }, {
    title: "Muntaqā al-Akhbār fī Sharḥ Qurrat al-Abṣār",
    author: "ʿAbd Allāh Walad Ibrāhīm Walad ʿAbd Allāh",
    subject: "Seerah",
    cover: "../lovable-uploads/seerah2.jpeg"
  }, {
    title: "Tuḥfat al-Surūr bi-Sharḥ Naẓm al-Burūr",
    author: "Shaykh al-ʿAllāmah Abū ʿAbdillāh Muḥammad ibn Aḥmad al-Mālikī al-Ṣanhājī al-Maghribī",
    subject: "Tazkiyah",
    cover: "../lovable-uploads/tazkiyah.jpeg"
  }, {
    title: "Naẓm Maṭharat al-Qulūb",
    author: "al-ʿAllāmah Muḥammad Mawlūd ibn Aḥmad Fāl",
    subject: "Tazkiyah",
    cover: "../lovable-uploads/tazkiyah2.jpeg"
  }, {
    title: "al-Lāʾilī al-Ḥisān ʿalā Muḥārim al-Lisān",
    author: "al-ʿAllāmah al-Muḥaqqiq al-Shaykh Muḥammad al-Ḥasan ibn Aḥmad al-Shinqīṭī al-Jakanī",
    subject: "Tazkiyah",
    cover: "../lovable-uploads/tazkiyah3.jpeg"
  }, {
    title: "Naẓmu Ghazawāt al-Nabī ﷺ",
    author: "al-ʿAllāmah al-Ḥāfiẓ Aḥmad al-Badawī ibn Muḥammad al-Majlīsī al-Shinqīṭī",
    subject: "Seerah",
    cover: "../lovable-uploads/seerah.jpeg"
  }];
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
                  <Card className="glass-card transition-all duration-300 overflow-hidden h-full">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-white flex items-center justify-center">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-contain rounded-xl border-2 border-white shadow-lg" style={{ display: 'block' }} />
                    </div>
                    
                    <CardContent className="p-6 text-center">
                      {/*<h3 className="text-xl md:text-2xl font-semibold text-navy-700 mb-2">{book.title}</h3>
                      <p className="text-base md:text-lg text-navy-400 mb-2">{book.author}</p>*/}
                      <span className="text-sm bg-lighthouse-100 text-lighthouse-700 px-3 py-1 rounded-full inline-block">{book.subject}</span>
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