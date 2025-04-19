
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  useEffect(() => {
    // Only add script if it doesn't exist
    if (!document.getElementById('shapo-embed-js')) {
      const script = document.createElement('script');
      script.id = 'shapo-embed-js';
      script.src = 'https://cdn.shapo.io/js/embed.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);
  const testimonials = [
  {
    quote: `السلام عليكم ورحمة الله وبركاته\n\nI initially joined after some significant life changes, hoping to find solace in learning about Islam and bettering myself to draw closer to Allah ﷻ. Alhamdulillah, through these classes, I have gained so much beneficial knowledge and found a profound sense of peace that's helped me navigate life with greater clarity and purpose.\n\nI’ve also gained a supportive and motivating community of like-minded individuals on this same journey. Being part of this community has been incredible, their diverse perspectives during class discussions and assignments have deepened my understanding, which helps in improving implementation and retention of what I’ve learned, Alhamdulillah.\n\nFor anyone considering joining, this is a space where questions and concerns are met with understanding and encouragement, the instructor and community members create a comfortable environment for asking for advice and clarifications, making it easier to address personal struggles and challenges through the lens of Islam. I highly recommend it to anyone looking for both spiritual growth and meaningful connections.`,
    name: "Rozanna",
    title: "",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: `Joining Muslim Lighthouse was the best decision I ever made Alhamdulillah. It truly opened my eyes to how important it is to have an Islamic teacher. In the past whenever I needed information I would go to Google, but ultimately that would always lead me to confusion as there was always so much information and different answers. Having a teacher has completely erased that confusion, and Alhamdulillah I feel like I am able to navigate life in this dunya a lot more clearly.\n\nOur imaan is something we need to nurture and take care of. It is important to be surrounded by an atmosphere that encourages that, and Muslim Lighthouse is an environment that truly does that.\n\nUstadh Rhyad goes above and beyond in our classes at Muslim Lighthouse. His structure allows everyone to be able to absorb what we’re being taught, and he ensures to make the classes interactive which further develops our understanding. One of my favourite experiences was when Ustadh Rhyad was teaching about the proofs of the Quran. One of the proofs is that the Quran is easy to remember and so he had an activity where he recited verses from the Quran and we all had to say what the next verse was. It was such a beautiful experience and allowed us to witness one of the proofs of the Quran during our class.\n\nAlso the Hearts Aligned class Alhamdulillah!!! As a Muslimah, having a safe space where I can ask any question is so helpful.\n\nMay Allah (SWT) reward Ustadh Rhyad for everything he is doing for the Ummah! May Allah (SWT) guide us all to be beacons of light for the Ummah! Aameen!`,
    name: "Sumayyah Rajah",
    title: "",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: `Are you seeking truth and knowledge? Feeling lost or hopeless? That you have no purpose? Or like you are being crushed by the weight of this world? Then Alhamdullilah Muslim Lighthouse is what you need and have been looking for! This is perfect for Muslims and people curious to learn more about Islam.\n\nAt the start of my journey I felt like I had come undone and was in desperate need of change. The only thing I had left was faith in Allah SWT. Through the darkness I was guided to the Muslim Lighthouse and alhamdulilah in such a short space of time it transformed my life in ways I didn’t even know I needed. I have such clarity and sense of purpose. Although previously being a ‘practising’ muslim, the teachings provided have strengthened my conviction in Islam and set me on a path to attaining what I strive for and realigned me for true success with a sound heart.\n\nMuslim Lighthouse provides you with an accessible way of gaining comprehensive knowledge of Islam & brings to life the Qur’an and sunnah in a way that is relatable and easy to implement into your life. It offers you live interactive classes, recordings to access in your own time and at a pace that suits you. Live Q&A’s and access to teachers to ask questions and expand on learning. There is such a beautiful supportive community to engage and learn with. The courses and content have been constructed extremely well, and are delivered expertly by Ustadh Rhyad & Ustadh James. All of the lessons have such profound messages that most of the time my heart is shaken to the core & leaves you wanting more! What also shines through is Ustadh's genuine dedication and commitment throughout the ML offering and in guiding you through and helping you to reap the rewards in your life through the transformation. I highly recommend the Illuminate Program as a starting point if you too would like to transform your life. My only genuine regret was not finding it sooner!\n\nI will be eternally grateful for Muslim Lighthouse and the impact it is had on me in just under 4 months. I look forward to the journey ahead and to see it go from strength to strength and seeing it transform the lives of many more, in sh Allah.`,
    name: "Shabana",
    title: "",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    quote: `There is a famous saying that, to know something is to be able to teach it to a child. We make so many life altering descions based off being muslim, but how many of us can teach the core principals of islam to a child ?\n\nMany of us don't truly understand, the core concepts of islam. We have a general jist understanding of it that we have peiced together over the years. But we have never sat down to truly learn the principles of islam from a-z. Such as what is our purpose, what is the role of money, prayer, and hardships in islam. Ustadh does a great, job in teaching these concepts, and allows for questions untill you truly understand and can teach to a child.\n\nYou will come out of the program, with a different perspective on life. A complete perspective.\nI Highly recommend!`,
    name: "Rayyan",
    title: "",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    quote: `I joined early on, ever since I’ve joined I’ve seen it’s growth. It’s truly been amazing. There’s a strong sense of community and care amongst everyone. Everyone is there for one another. Brother Rhyad and Brother James have both been diligent and determined on spreading the knowledge they know.\n\nBrother Rhyad is a teacher who helps to bring ease to the student’s life. He makes the information very digestible which is not common to come by. So definitely when taking knowledge you know you are taken care of. This isn’t intensive, where you feel you’re stranded in the middle of the desert. If you’re confused in any way, Rhyad is there to help. There have been many times where he has helped his students who have gone through troubles in their personal lives eg. Fundraisers, arranging Ruqya sessions etc. he’s definitely created a true sense of community Ma Sha Allah, it will eventually keep growing In Sha Allah.\n\nJoining Muslim Lighthouse you will be in good hands. No doubt this is someone who is determined to see you progress in life.\n\nAhlan wa Sahlan!`,
    name: "Seher Mohsin",
    title: "",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    quote: `I have been a student at Muslim Lighthouse for nearly four months, and I cannot express enough the immense benefits I have gained from the programs. Courses like the Hadith Sciences and the Tafsir of Surah Kahf have provided me with profound insights, creating a deep yearning to continue seeking knowledge.\n\nUstadh Rhyad is a wonderful teacher who creates an engaging and enriching learning experience. He is always approachable, patient, and willing to explain concepts further, ensuring every student feels supported on their journey.\n\nOne of the many great features of Muslim Lighthouse is access to recordings of previous programs, which allows you to catch up or review material at your own pace which is perfect for students with busy schedules.\n\nI highly recommend Muslim Lighthouse to anyone regardless of where they are at, on their Islamic knowledge journey. It’s a platform that truly nurtures a love for Islam and provides tools for spiritual growth.`,
    name: "Nuha",
    title: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    quote: `AOa ,born as a Muslim I had such a little knowledge about Islam and deep down in my heart i had so many questions about my religion which i didn’t know and by time passing it starts bothering me more and more ,in my every salah i ask Allah swt to guide me and understand my deen in depth and alhumdulillah finally Allah swt excepted my dua’s and I saw brother Ryhad video how Allah swt talk about orbits in Quran and that video inspired me so much that in my heart i wanted have knowledge like him and wish if i could learn from him and subhan Allah i saw his story on instagram that he his Muslim Light House and he gives live classes about Islam deeply,\nI was so happy to saw that and start taking classes in Muslim Light House and alhumdulillah after joining those classes my life totally transformed,i gets all the answers which were bothering me a lot ,i feel so blessed to be part of Muslim light house,the community in there are so lovely and helpful we learn so much with each other,if you are like me born Muslim and have little knowledge about Islam, i highly recommend to join Muslim Light House it changed my life and im sure inshaAllah it will change your life too ,\nMay Allah swt guide us to the straight path and understand our deen in depth Ameen sum Ameen :)`,
    name: "Unknown",
    title: "",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    quote: `Salaam alaykum! I’ve been with Muslim Lighthouse for over a year now, and what a transformative year it has been. I saw a instagram post about it and thought I probably should try and learn more about Islam. After completing the Illuminate programme I felt like it was necessary for me to retake my Shahada as Islam felt like a completely brand new gift that I’d previously taken for granted.\n\nEvery single course on Muslim Lighthouse is so relevant to our daily lives and is delivered in such a digestible yet inspirational way by Rhyad and James. I’ve tried a lot of online courses and I can hand on my heart say that none of them offer the same standard of engagement or variety in topics. There have been topics that I’ve read about that completely went over my head, but through Muslim Lighthouse I am able to learn and implement them with clarity.\n\nThe community is also so beautiful you really don’t want to miss out on it. I’ve made such amazing friendships with students from all over the world and everyone genuinely cares for each other here and wants only the best for one another. You also have access to the teachers and assistants for any advice you need and everyone is so approachable and sincere. Again- there’s nothing else like it out there!\n\nWe all know that you’ll only get out of it whatever you give- but Muslim Lighthouse is just the type of place you want to keep giving your all to. The classes are always enjoyable as there’s always a discussion element alongside the content, the students encourage and uplift one another and the changes you will see in your life from implementing the small changes after each class are phenomenal.\n\nHonestly, I make the intention to remain a part of Muslim Lighthouse (forever!), and I can’t recommend it highly enough. Having a teacher who is eager and determined to elevate each of his students to a higher level, whilst ensuring that our intentions and hearts are being focused on during the process is incredible. Do yourself justice and come join us!`,
    name: "Sahar",
    title: "",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    quote: `Salamu ‘Alaykum!\n\nI’ve been part of Muslim Lighthouse for several weeks now, and I can honestly say it has been life-changing. From the moment you join the server, you’re welcomed into a supportive community filled with Islamic reminders and meaningful conversations. Everyone helps each other, and there’s no judgment—only support for who you are.\n\nWhen you first join, you have the option to go through various courses, with the ‘Illuminate’ program being highly recommended. This program instills the love of Islam into your heart, which is something you’ll truly appreciate before beginning your journey of seeking knowledge. As you progress, the courses become more advanced, covering topics such as fiqh and Hadith sciences.\n\nAll I can say is: give it a try! I guarantee you’ll love both the community and the courses. By applying what you learn to your life, you will elevate your status with Allah (SWT). From personal experience, after watching most of the ‘Sound Heart’ course, I’ve found myself more mindful of Allah (SWT), taking better care of my heart, and catching myself when I realise my feelings or intentions are off.\n\nThe Messenger of Allah (ﷺ) said: “Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”\n\nSo, take the step, and become a beacon of light for the Ummah!`,
    name: "Renwar",
    title: "",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    quote: `For me, personally, Muslim Lighthouse has significantly deepened my core beliefs in Islam. It has allowed me to develop a greater love for our deen and, most importantly, for Allah. I find myself yearning to be among those who are favored by Him. It truly enhances your relationship with Allah as you explore and delve into various aspects of the deen, from the stories of the prophets to studying fiqh. It not only enhances your connection with the deen, but it also provides a platform to make friends and be in the company of the righteous. I couldn't recommend it more!`,
    name: "laiba ehsan",
    title: "",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
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
        </div>
        
        <div className="relative max-w-4xl mx-auto trustpilot-block bg-white p-6 rounded-2xl" style={{ boxShadow: '0 4px 5px 0 rgba(0, 192, 230, 0.2)' }}>
          <div id="shapo-widget-cdbc4aa31f0577fc383b"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
