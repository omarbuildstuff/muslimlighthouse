import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Smartphone, BookOpen, Building2, CheckCircle2, Sparkles, Users, Award, ArrowRight } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

// Custom Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-01T18:00:00+00:00'); // 6pm UK time (UTC)

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <motion.div
        className="bg-gradient-to-r from-lighthouse-500/20 to-lighthouse-600/20 backdrop-blur-sm rounded-2xl px-8 py-6 border-2 border-lighthouse-400/50 shadow-2xl max-w-md mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="text-lighthouse-100 text-xl font-bold mb-4 drop-shadow-lg">
          ⏰ Starts In:
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{timeLeft.days}</div>
            <div className="text-sm text-lighthouse-200 uppercase font-semibold">Days</div>
          </div>
          <div className="text-lighthouse-300 text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm text-lighthouse-200 uppercase font-semibold">Hours</div>
          </div>
          <div className="text-lighthouse-300 text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm text-lighthouse-200 uppercase font-semibold">Minutes</div>
          </div>
          <div className="text-lighthouse-300 text-3xl font-bold">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm text-lighthouse-200 uppercase font-semibold">Seconds</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const scrollProgressVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for premium feel
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const heroTitleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const heroWordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    className="bg-lighthouse-300/60 px-1 rounded"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {children}
  </motion.span>
);

const SectionTitle = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    {icon && <div className="flex justify-center mb-4">{icon}</div>}
    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">{children}</h2>
    <div className="flex items-center justify-center gap-2">
      <div className="h-px w-12 bg-lighthouse-400"></div>
      <Sparkles className="w-4 h-4 text-lighthouse-500" />
      <div className="h-px w-12 bg-lighthouse-400"></div>
    </div>
  </div>
);

const MotionSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.section>
);

const SalesPage: React.FC = () => {
  const [currentPricingIndex, setCurrentPricingIndex] = useState(0);

  const pricingOptions = [
    {
      price: '$120',
      subtitle: "That's just $10 per lesson."
    },
    {
      price: '$120',
      subtitle: "Less than a coffee a day."
    },
    {
      price: '$120',
      subtitle: "For your akhira."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPricingIndex((prev) => (prev + 1) % pricingOptions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-navy-800">
      <main>
        {/* Hero Section */}
        <MotionSection className="pt-20 pb-24 text-center bg-gradient-to-b from-lighthouse-100 to-white overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src="/lovable-uploads/318cf83b-5ea0-41fb-98e6-be0bf3b21ff4.png" alt="Muslim Lighthouse Logo" className="h-12 mx-auto mb-12" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-navy-800 leading-tight"
              variants={heroTitleVariants}
            >
              {"Tired of guessing what will ".split(" ").map((word, index) => (
                <motion.span key={index} className="inline-block mr-1.5 md:mr-2" variants={heroWordVariants}>
                  {word}
                </motion.span>
              ))}

              <motion.span
                className="inline-block text-lighthouse-600 relative"
                variants={heroWordVariants}
              >
                remove
              </motion.span>

              {" the ".split(" ").map((word, index) => (
                <motion.span key={index} className="inline-block mr-1.5 md:mr-2" variants={heroWordVariants}>
                  {word}
                </motion.span>
              ))}

              <motion.span
                className="inline-block text-lighthouse-600 relative"
                variants={heroWordVariants}
              >
                emptiness
              </motion.span>

              {" from your ".split(" ").map((word, index) => (
                <motion.span key={index} className="inline-block mr-1.5 md:mr-2" variants={heroWordVariants}>
                  {word}
                </motion.span>
              ))}

              <motion.span
                className="inline-block text-lighthouse-600 relative"
                variants={heroWordVariants}
              >
                heart
              </motion.span>

              {"?".split(" ").map((word, index) => (
                <motion.span key={index} className="inline-block mr-1.5 md:mr-2" variants={heroWordVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-navy-600/90 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              In just 3 months, practicing Islam will feel <span className="underline decoration-2 underline-offset-4">sweeter than scrolling.</span>
            </motion.p>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <p className="text-xl font-semibold text-lighthouse-600 mb-6 text-center max-w-4xl mx-auto leading-relaxed">👇 Watch how our students were impacted in just 12 weeks — after feeling lost, overwhelmed and doubtful for years 👇</p>
              <motion.div 
                className="bg-navy-900 h-80 w-full max-w-3xl mx-auto rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/placeholder-video.jpg" alt="Video thumbnail" className="absolute h-full w-full object-cover opacity-20"/>
                <div className="absolute inset-0 bg-black/30"></div>
                <motion.button 
                  className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8.42 15.42a1 1 0 001.18 0l5-3.5a1 1 0 000-1.84l-5-3.5a1 1 0 00-1.18 1.84L12.59 10l-4.17 2.92a1 1 0 000 1.5zM5 4a1 1 0 00-1 1v10a1 1 0 002 0V5a1 1 0 00-1-1z" /></svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </MotionSection>

        {/* Problem Section */}
        <MotionSection className="py-32">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-20"
              variants={scrollProgressVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle>You feel like you're trying, but the connection is missing.</SectionTitle>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={staggerItemVariants} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-lighthouse-100 to-lighthouse-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Smartphone className="w-8 h-8 text-lighthouse-600" />
                  </div>
                  <div className="pt-3">
                    <p className="text-xl text-navy-700 leading-relaxed">You stand in prayer, but your mind is on dinner and DMs.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={staggerItemVariants} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-lighthouse-100 to-lighthouse-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <BookOpen className="w-8 h-8 text-lighthouse-600" />
                  </div>
                  <div className="pt-3">
                    <p className="text-xl text-navy-700 leading-relaxed">You skip your Qur'an reading, drained after work.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={staggerItemVariants} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-lighthouse-100 to-lighthouse-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Building2 className="w-8 h-8 text-lighthouse-600" />
                  </div>
                  <div className="pt-3">
                    <p className="text-xl text-navy-700 leading-relaxed">You nod along during the khutbah, but your heart isn't listening.</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white/80 p-12 rounded-3xl border border-navy-100/50 backdrop-blur-sm">
                  <blockquote className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6 leading-tight">
                    The real challenge isn't a lack of knowledge — it's the <Highlight>disconnection to that knowledge.</Highlight>
                  </blockquote>
                  <p className="text-lg text-navy-600/90 leading-relaxed">So much of what we learn teaches *what* to believe, but rarely *how* to live it. Until that changes, the cycle of guilt and distraction continues.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </MotionSection>

        {/* Solution Section */}
        <MotionSection className="py-32 bg-lighthouse-900 text-white relative overflow-hidden">
          <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={scrollProgressVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
                The Illuminate Program was built to <Highlight>break this cycle.</Highlight>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                This is a 12-week reset, with live sessions designed to help you learn, reflect, and live what you're learning.
              </p>
              <motion.div 
                className="bg-white/90 p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto border border-lighthouse-200/60 backdrop-blur-sm"
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">At the center is the Illuminate Framework</h3>
                <p className="text-xl text-navy-700/90 leading-relaxed">A journey of mind, heart, and impact.</p>
              </motion.div>
            </motion.div>
          </div>
        </MotionSection>

        {/* Program Details Section */}
        <MotionSection className="py-32">
          <div className="container max-w-7xl mx-auto px-4">
            <motion.div 
              className="grid lg:grid-cols-3 gap-12 text-center"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Stage 1 */}
              <motion.div 
                className="group relative"
                variants={scrollProgressVariants}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 text-white flex items-center justify-center text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">1</div>
                <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lighthouse-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-navy-800 mb-6">Illuminate Your Mind</h3>
                    <p className="text-sm text-navy-600 mb-8 font-medium">Weeks 1–4</p>
                    <ul className="text-left space-y-4 text-lg text-navy-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Build confidence in Islam as the truth.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Gain clarity about Allah's existence.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Understand the miracles of the Quran.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Stage 2 */}
              <motion.div 
                className="group relative"
                variants={scrollProgressVariants}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 text-white flex items-center justify-center text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lighthouse-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-navy-800 mb-6">Illuminate Your Heart</h3>
                    <p className="text-sm text-navy-600 mb-8 font-medium">Weeks 5–8</p>
                    <ul className="text-left space-y-4 text-lg text-navy-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Build a practical relationship with Allah.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Protect yourself from Shaytan's attacks.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Taste the sweetness of worship.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Stage 3 */}
              <motion.div 
                className="group relative"
                variants={scrollProgressVariants}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 text-white flex items-center justify-center text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">3</div>
                <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-lighthouse-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-navy-800 mb-6">Illuminate Others</h3>
                    <p className="text-sm text-navy-600 mb-8 font-medium">Weeks 9–12</p>
                    <ul className="text-left space-y-4 text-lg text-navy-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Understand corruption in the world.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Learn to transform those around you.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span>Share Islam with Muslims & non-Muslims.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-20 max-w-4xl mx-auto"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-navy-800 leading-relaxed">
                By the end, you'll have a clear path, a <Highlight>renewed heart,</Highlight> and the confidence to live and share Islam with dignity.
              </p>
            </motion.div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-32 bg-lighthouse-500 text-white relative overflow-hidden">
          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10 mb-12">
            <CountdownTimer />
          </div>
          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={scrollProgressVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                Enrollment is now open. Spaces are limited to 100 students.
              </p>
              <motion.button 
                className="bg-white text-lighthouse-800 font-bold py-6 px-12 rounded-full text-xl hover:bg-white/90 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-3"
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join The Cohort Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </MotionSection>

        {/* Testimonials Section */}
        <MotionSection className="py-32">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <div className="rounded-3xl overflow-hidden">
              <Testimonials />
            </div>
          </div>
        </MotionSection>

        {/* Offer Section */}
        <MotionSection className="py-32 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionTitle icon={<Award className="w-16 h-16 text-lighthouse-500" />}>Here's Everything You Get</SectionTitle>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
              <motion.div 
                className="group relative"
                variants={scrollProgressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 bg-lighthouse-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-12 rounded-3xl border-2 border-lighthouse-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">The Illuminate Program</h3>
                  </div>
                  <ul className="space-y-6 text-xl text-navy-700">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>12 weeks of live sessions.</strong> Sundays, 5pm UK time. Miss one? Watch the recording before the next session and stay on track.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span><strong>Win-Your-Money-Back Guarantee.</strong> Gain 3 months access to Ustadh Rhyad's all-in-one program for free when completing with two conditions:<br />
                      • Attend live or watch before the next session.<br />
                      • Share one thing you learnt from each session and tag @rhyadmuslim (Instagram or TikTok)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                className="group relative"
                variants={scrollProgressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 bg-lighthouse-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-navy-800 p-12 rounded-3xl border-2 border-lighthouse-500/20 shadow-xl text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lighthouse-500 to-lighthouse-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">Bonuses</h3>
                  </div>
                  <ul className="space-y-6 text-xl">
                    <li className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>Direct access to Ustadh Rhyad for Q&A and support</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>All class slides & lifetime access to recordings</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>Weekly action points to turn theory into practice</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>Discussions and community to keep you accountable</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span>Quizzes to make sure the knowledge sticks</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="text-center max-w-3xl mx-auto"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white p-12 rounded-3xl border-2 border-navy-100 shadow-xl inline-block">
                <h3 className="text-3xl font-bold mb-6">The Investment?</h3>
                <div className="mb-6">
                  <motion.span
                    key={currentPricingIndex}
                    className="text-6xl font-bold text-navy-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {pricingOptions[currentPricingIndex].price}
                  </motion.span>
                  <motion.p
                    key={`subtitle-${currentPricingIndex}`}
                    className="text-xl text-navy-600/90 mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {pricingOptions[currentPricingIndex].subtitle}
                  </motion.p>
                </div>
                <p className="text-lg text-navy-500">Pay in 3 instalments at checkout.</p>
              </div>
            </motion.div>
          </div>
        </MotionSection>

        {/* Teacher Section */}
        <MotionSection className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/lovable-uploads/rhyad.jpg" alt="Ustadh Rhyad" className="rounded-lg shadow-2xl w-full"/>
              </div>
              <div>
                <SectionTitle icon={<Users className="w-12 h-12 text-lighthouse-500" />}>Your Teacher</SectionTitle>
                <p className="text-lg text-navy-700/90 mb-4">Ustadh Rhyad is an Islamic teacher, da’ee, and committed student of knowledge who studied all the major Islamic sciences under Shaykh Baha al-Majlisi in Mauritania. He holds an ijazah (formal authorisation) in all the sciences he studied and is currently continuing his Qur’an studies in Madinah. Ustadh Rhyad currently teaches 230+ students around the world.</p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-32 bg-lighthouse-900 text-white relative overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 text-center relative z-10 mb-12">
            <CountdownTimer />
          </div>
          <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={scrollProgressVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Illuminate isn't always open.
              </h2>
              <p className="text-2xl md:text-3xl mb-12 text-white/80 leading-relaxed">
                Once this cohort begins, enrollment closes. Your reset starts the moment you commit.
              </p>
              <div className="space-y-6">
                <motion.button 
                  className="bg-gradient-to-r from-lighthouse-500 to-lighthouse-600 text-white font-bold py-6 px-16 rounded-full text-2xl hover:from-lighthouse-600 hover:to-lighthouse-700 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4"
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join The Cohort Now</span>
                  <ArrowRight className="w-8 h-8" />
                </motion.button>
                
              </div>
            </motion.div>
          </div>
        </MotionSection>
      </main>
    </div>
  );
};

export default SalesPage;
