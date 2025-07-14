import React, { useEffect, useRef, useState } from "react";
import { motion, cubicBezier } from 'framer-motion';
import { ChevronRight, Star, BookOpen, Heart, Users, CheckCircle, Play } from "lucide-react";
import TopicsHabitsDropdown from "@/components/TopicsHabitsDropdown";
import ReviewCarousel from "./ReviewCarousel";

const useScrollAnimation = (refs: React.RefObject<HTMLElement>[]) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const newActiveIndices = [...activeIndices];
      let updated = false;

      entries.forEach(entry => {
        const index = refs.findIndex(ref => ref.current === entry.target);
        if (index === -1) return;

        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.1;
        const isAlreadyActive = newActiveIndices.includes(index);
        
        if (isVisible && !isAlreadyActive) {
          newActiveIndices.push(index);
          updated = true;
        }
      });

      if (updated) {
        setActiveIndices(newActiveIndices);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all refs
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Handle scroll direction for additional context
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refs, activeIndices]);

  return { activeIndices, lastScrollY };
};

// Animation variants for framer-motion
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.98,
    transition: { duration: 0.5, ease: cubicBezier(0.16, 1, 0.3, 1) }
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: cubicBezier(0.16, 1, 0.3, 1),
      opacity: { duration: 0.6 },
      y: { type: 'spring', stiffness: 100, damping: 15 }
    }
  })
};

const phases = [
  {
    title: "Illuminate your Mind",
    desc: "Build a strong foundation of core Islamic knowledge",
    icon: <BookOpen className="w-6 h-6 text-lighthouse-600" />,
  },
  {
    title: "Illuminate your Heart",
    desc: "Apply what you learn to your inner self and actions",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
  },
  {
    title: "Illuminate Others",
    desc: "Learn how to inspire change in your family and community",
    icon: <Users className="w-6 h-6 text-green-600" />,
  },
];

const topics = [
  {
    title: "Fiqh",
    main: "Learn how to worship and live according to Allah’s guidance in your actions — from wudu to business deals.",
    sub: "Clarity in every action. Confidence in every prayer.",
  },
  {
    title: "Hadith Sciences",
    main: "Discover how scholars preserved the Prophet’s ﷺ words — and learn which hadiths are authentic.",
    sub: "Build confidence in the Sunnah. Know what to trust.",
  },
  {
    title: "Hadith",
    main: "Study the actual words, wisdom, and actions of the Prophet ﷺ.",
    sub: "Connect with his ﷺ life, teachings, and legacy — directly.",
  },
  {
    title: "Logic",
    main: "Train your mind to think clearly, avoid contradictions, and spot flawed arguments.",
    sub: "Sharpen your reasoning. Protect your beliefs.",
  },
  {
    title: "Seerah",
    main: "Walk through the life of the Prophet ﷺ — not as a story, but as a guide for your own journey.",
    sub: "Real events. Real lessons. A roadmap to living Islam.",
  },
  {
    title: "Tafsir",
    main: "Go beyond reading — understand what Allah ﷻ is really saying in His Book.",
    sub: "Discover meanings, context, and the beauty of divine speech.",
  },
  {
    title: "Tazkiyah",
    main: "Cleanse your heart from diseases like envy, arrogance, and heedlessness.",
    sub: "Draw closer to Allah. Become the person He loves.",
  },
  {
    title: "Usul Al-Fiqh",
    main: "Learn the tools scholars use to derive rulings from the Qur’an and Sunnah.",
    sub: "Go beyond the “what” — understand the “why” behind the rulings.",
  },
];

const habits = [
  {
    title: "Qiyam Saturdays",
    main: "Every Saturday, we post a reminder — and the whole community wakes up for Qiyam together on Sunday morning.",
    sub: "Let Tahajjud quietly shape your life, one week at a time.",
  },
  {
    title: "Tadabbur Tuesdays",
    main: "Every Tuesday, students share their personal Qur’an reflections — so we all benefit from each other’s insights.",
    sub: "Improve your connection with the Quran, week upon week.",
  },
  {
    title: "Thikr Thursdays",
    main: "Every Thursday, a thikr challenge is shared — and the community takes it on together.",
    sub: "Build the habit of remembering Allah frequently.",
  },
  {
    title: "Dawah Weekly/ Mondays",
    main: "Each week, students share one way they brought someone closer to Islam.",
    sub: "A weekly habit of leaving an impact on the Ummah.",
  },
];

const PathSection = () => {
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const { activeIndices } = useScrollAnimation([step1Ref, step2Ref, step3Ref]);
  
  // Add smooth scroll behavior to the entire document
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
      return () => {
        document.documentElement.style.scrollBehavior = '';
      };
    }
  }, []);

  return (
  <section className="bg-lighthouse-900 py-10 md:py-20 pb-10 relative">
    <div className="relative z-10 mx-auto py-10 md:max-w-6xl md:px-4">
      {/* Step 1: Illuminate Program */}
      <motion.div 
        ref={step1Ref}
        custom={0}
        initial="hidden"
        animate={activeIndices.includes(0) ? 'visible' : 'hidden'}
        variants={cardVariants}
        className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10 px-4 w-[95%] md:w-auto mx-auto will-change-transform"
        style={{
          minHeight: 'auto',
          paddingBottom: '3rem',
          scrollMarginTop: '80px',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lighthouse-100 text-lighthouse-700 text-xl font-bold mb-4 mx-auto">1</div>
        <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight text-center">
          <span className="gradient-text">Illuminate Program</span>
        </h2>
        <div className="w-12 h-1 bg-lighthouse-200 rounded-full mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-navy-800 mb-4 max-w-2xl mx-auto text-center">
          The Illuminate Program is our flagship, 3-month course designed to completely transform how you understand and live Islam — even if you feel lost, disconnected, or overwhelmed.
        </p>
        <p className="text-xl md:text-2xl font-bold text-lighthouse-700 mt-10 mb-10 max-w-xl mx-auto text-center rounded-lg py-2 px-4 shadow-md">
          This is not just a course. It’s a reset button.
        </p>
        <p className="text-lg md:text-xl text-navy-700 mb-8 max-w-xl mx-auto text-center">
          Designed for all levels — even if you’re starting from zero
        </p>
        <div className="mb-8 flex flex-col md:flex-row gap-8 items-center justify-center w-full">
  {/* Ticks/Benefits List */}
  <div className="w-full md:max-w-md flex flex-col items-center mx-auto">
    <ul className="w-full bg-lighthouse-100/70 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col gap-2 md:gap-1">
      <li className="flex items-center gap-2 md:gap-4 w-full hover:bg-lighthouse-50 transition rounded-xl p-2 md:p-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-5 h-5 md:w-6 md:h-6" /></span>
        <span className="text-left text-lg md:text-xl text-navy-800">A <strong>clear roadmap</strong> for your <strong>daily life</strong> as a Muslim</span>
      </li>
      <li className="flex items-center gap-2 md:gap-4 w-full hover:bg-lighthouse-50 transition rounded-xl p-2 md:p-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-5 h-5 md:w-6 md:h-6" /></span>
        <span className="text-left text-lg md:text-xl text-navy-800"><strong>Essential knowledge</strong> in <strong>Aqeedah, Tazkiyah, Fiqh, Tafsir, Seerah</strong> & more</span>
      </li>
      <li className="flex items-center gap-2 md:gap-4 w-full hover:bg-lighthouse-50 transition rounded-xl p-2 md:p-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-5 h-5 md:w-6 md:h-6" /></span>
        <span className="text-left text-lg md:text-xl text-navy-800"><strong>Action steps</strong> every lesson to help you grow <strong>spiritually and practically</strong></span>
      </li>
      <li className="flex items-center gap-2 md:gap-4 w-full hover:bg-lighthouse-50 transition rounded-xl p-2 md:p-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-5 h-5 md:w-6 md:h-6" /></span>
        <span className="text-left text-lg md:text-xl text-navy-800">A <strong>deep connection</strong> with your <strong>Deen, your purpose, and your Creator</strong></span>
      </li>
      <li className="flex items-center gap-2 md:gap-4 w-full hover:bg-lighthouse-50 transition rounded-xl p-2 md:p-4">
        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600"><CheckCircle className="w-5 h-5 md:w-6 md:h-6" /></span>
        <span className="text-left text-lg md:text-xl text-navy-800">The <strong>confidence to teach, give Dawah, and stay consistent long-term</strong></span>
      </li>
    </ul>
  </div>
  {/* 3 Transformative Phases Timeline */}
  <div className="w-full md:max-w-md flex flex-col items-center mx-auto relative">
    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 text-center">
          <span className="gradient-text">The 3 Phases:</span>
        </h3>
      <div className="flex flex-col gap-6 w-full relative z-10">
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-lighthouse-300 rounded-full hidden md:block" style={{zIndex:0}}></div>
      {phases.map((phase, i) => (
        <div key={i} className="flex flex-row items-center gap-4 bg-white/80 rounded-xl p-4 shadow border border-lighthouse-100 relative">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-lighthouse-700 text-white text-2xl font-extrabold shadow-lg">{i + 1}</div>
          <div className="flex-1 text-left">
            <div className="font-bold text-lighthouse-700 text-lg md:text-xl mb-1">{phase.title}</div>
            <div className="text-navy-800 text-base md:text-lg leading-snug">{phase.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
        <ReviewCarousel />
      </motion.div>
      {/* Step 2: Select Topic */}
      <motion.div 
        ref={step2Ref}
        custom={1}
        initial="hidden"
        animate={activeIndices.includes(1) ? 'visible' : 'hidden'}
        variants={cardVariants}
        className={activeIndices.includes(1) ? "mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-10 px-4 w-[95%] md:w-auto mx-auto will-change-transform relative z-[1001]" : "mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-10 px-4 w-[95%] md:w-auto mx-auto will-change-transform relative z-10"}
        style={{
          minHeight: 'auto',
          paddingBottom: '3rem',
          scrollMarginTop: '80px',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lighthouse-100 text-lighthouse-700 text-xl font-bold mb-4 mx-auto">2</div>
        <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight text-center">
          <span className="gradient-text">Select Your Topic</span>
        </h2>
        <div className="w-12 h-1 bg-lighthouse-200 rounded-full mx-auto mb-6"></div>
        <p className="text-base md:text-lg text-navy-800 mb-6 max-w-2xl mx-auto text-center">
          Once you have completed Step 1, <strong>choose a topic</strong> you want to master. Each topic unlocks a <strong>unique path</strong> of learning and personal growth.
        </p>
        <div className="w-full flex justify-center">
          {/* Only topic dropdown */}
          <TopicsHabitsDropdown only="topic" />
        </div>
      </motion.div>
      {/* Step 3: Select Habit */}
      <motion.div 
        ref={step3Ref}
        custom={2}
        initial="hidden"
        animate={activeIndices.includes(2) ? 'visible' : 'hidden'}
        variants={cardVariants}
        className="bg-white rounded-2xl shadow-sm border border-lighthouse-100 p-8 md:p-10 px-4 w-[95%] md:w-auto mx-auto will-change-transform relative z-50"
        style={{
          minHeight: 'auto',
          paddingBottom: '3rem',
          scrollMarginTop: '80px',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
        }}
        whileHover={{
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lighthouse-100 text-lighthouse-700 text-xl font-bold mb-4 mx-auto">3</div>
        <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight text-center">
          <span className="gradient-text">Select Your Weekly Habit</span>
        </h2>
        <div className="w-12 h-1 bg-lighthouse-200 rounded-full mx-auto mb-6"></div>
        <p className="text-base md:text-lg text-navy-800 mb-6 max-w-2xl mx-auto text-center">
          Whilst you are studying, pick a <strong>weekly habit</strong> to anchor your learning in <strong>daily life</strong>. These habits help you apply what you learn.
        </p>
        <div className="w-full flex justify-center">
          <TopicsHabitsDropdown only="habit" />
        </div>
      </motion.div> {/* End of Step 3 */}


    </div> {/* End of main div in PathSection */}
  </section>
  );
};

export default PathSection;
