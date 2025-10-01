import React from 'react';
import { motion, Variants } from 'framer-motion';
import Testimonials from '@/components/Testimonials';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    <motion.span
      className="absolute bottom-0 left-0 w-full h-1/3 bg-lighthouse-300/50 -z-10"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
    />
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold text-navy-800 mb-4">{children}</h2>
    <svg className="mx-auto h-2 w-24 text-lighthouse-400" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 4 C25 0, 75 8, 100 4" stroke="currentColor" strokeWidth="4"/>
    </svg>
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
  return (
    <div className="bg-white text-navy-800">
            <main>
        {/* Hero Section */}
        <MotionSection className="py-24 text-center bg-navy-50/50">
          <div className="container max-w-5xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy-800">Tired of guessing what will remove the emptiness from your heart?</h1>
            <p className="text-lg md:text-xl text-navy-600/90 mb-8 max-w-3xl mx-auto">In just 3 months, practicing Islam will feel <Highlight>sweeter than scrolling.</Highlight></p>
            <div className="mb-8">
              <p className="text-md font-semibold text-lighthouse-600 mb-4">▼ WATCH THE VIDEO ▼</p>
              <div className="bg-navy-900 h-80 w-full max-w-3xl mx-auto rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src="/placeholder-video.jpg" alt="Video thumbnail" className="absolute h-full w-full object-cover opacity-20"/>
                <div className="absolute inset-0 bg-black/30"></div>
                <button className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 animate-pulse-light">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8.42 15.42a1 1 0 001.18 0l5-3.5a1 1 0 000-1.84l-5-3.5a1 1 0 00-1.18 1.84L12.59 10l-4.17 2.92a1 1 0 000 1.5zM5 4a1 1 0 00-1 1v10a1 1 0 002 0V5a1 1 0 00-1-1z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Problem Section */}
        <MotionSection className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <SectionTitle>You feel like you're trying, but the connection is missing.</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4 text-lg text-navy-700">
                  <li className="flex items-start"><span className="text-2xl mr-4 text-lighthouse-500">🤲</span><span>You stand in prayer, but your mind is on dinner and DMs.</span></li>
                  <li className="flex items-start"><span className="text-2xl mr-4 text-lighthouse-500">📖</span><span>You skip your Qur'an reading, drained after work.</span></li>
                  <li className="flex items-start"><span className="text-2xl mr-4 text-lighthouse-500">🕌</span><span>You nod along during the khutbah, but your heart isn't listening.</span></li>
                </ul>
              </div>
              <div className="bg-transparent p-8">
                <blockquote className="text-2xl font-semibold text-navy-800 mb-4 border-l-4 border-lighthouse-500 pl-6">
                  The real challenge isn’t a lack of knowledge — it’s the <Highlight>disconnection to that knowledge.</Highlight>
                </blockquote>
                <p className="text-navy-600/90 pl-6">So much of what we learn teaches *what* to believe, but rarely *how* to live it. Until that changes, the cycle of guilt and distraction continues.</p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Solution Section */}
        <MotionSection className="py-20 bg-navy-800 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-lighthouse-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-lighthouse-700/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4 max-w-3xl mx-auto">The Illuminate Program was built to <Highlight>break this cycle.</Highlight></h2>
            <p className="text-xl text-white/80 mb-12">This is a 12-week reset, with live sessions designed to help you learn, reflect, and live what you’re learning.</p>
            <div className="bg-navy-700 p-8 rounded-lg shadow-inner max-w-3xl mx-auto border-l-4 border-lighthouse-500">
              <h3 className="text-2xl font-bold mb-2">At the center is the Illuminate Framework</h3>
              <p className="text-lg text-white/90">A journey of mind, heart, and impact.</p>
            </div>
          </div>
        </MotionSection>

        {/* Program Details Section */}
        <MotionSection className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
                        <motion.div className="grid md:grid-cols-3 gap-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              {/* Stage 1 */}
              <motion.div className="bg-navy-50/50 p-8 rounded-lg border border-navy-100" variants={cardVariants} custom={1}>
                <h3 className="text-xl font-bold text-navy-800 mb-4">Stage 1: Illuminate Your Mind (Weeks 1–4)</h3>
                <ul className="text-left space-y-2 text-navy-700/90">
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Build confidence in Islam as the truth.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Gain clarity about Allah’s existence.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Understand the miracles of the Quran.</span></li>
                </ul>
              </motion.div>
              {/* Stage 2 */}
              <motion.div className="bg-navy-50/50 p-8 rounded-lg border border-navy-100" variants={cardVariants} custom={2}>
                <h3 className="text-xl font-bold text-navy-800 mb-4">Stage 2: Illuminate Your Heart (Weeks 5–8)</h3>
                <ul className="text-left space-y-2 text-navy-700/90">
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Build a practical relationship with Allah.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Protect yourself from Shaytan's attacks.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Taste the sweetness of worship.</span></li>
                </ul>
              </motion.div>
              {/* Stage 3 */}
              <motion.div className="bg-navy-50/50 p-8 rounded-lg border border-navy-100" variants={cardVariants} custom={3}>
                <h3 className="text-xl font-bold text-navy-800 mb-4">Stage 3: Illuminate Others (Weeks 9–12)</h3>
                <ul className="text-left space-y-2 text-navy-700/90">
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Understand corruption in the world.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Learn to transform those around you.</span></li>
                  <li className="flex items-start"><span className="text-lighthouse-500 mr-2">✓</span><span>Share Islam with Muslims & non-Muslims.</span></li>
                </ul>
              </motion.div>
            </motion.div>
            <div className="text-center mt-12">
              <p className="text-xl font-semibold text-navy-800 max-w-3xl mx-auto">By the end, you’ll have a clear path, a <Highlight>renewed heart,</Highlight> and the confidence to live and share Islam with dignity.</p>
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-20 bg-lighthouse-500 text-white">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Ready to Start Your Transformation?</h2>
            <p className="text-xl mb-6">Enrollment is now open. Spaces are limited to 100 students.</p>
            <button className="bg-white text-lighthouse-800 font-bold py-4 px-8 rounded-full text-lg hover:bg-white/90 transition-colors shadow-lg">Join The Cohort Now</button>
          </div>
        </MotionSection>

        {/* Testimonials Section */}
        <MotionSection className="py-20">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-navy-800">What Our Students Say</h2>
            <Testimonials />
          </div>
        </MotionSection>

        {/* Offer Section */}
        <MotionSection className="py-20 bg-navy-50/50">
          <div className="container max-w-5xl mx-auto px-4">
            <SectionTitle>Here's Everything You Get</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-8 rounded-lg border border-navy-100">
                <h3 className="text-2xl font-bold mb-4">The Illuminate Program</h3>
                <ul className="space-y-4 text-lg text-navy-700">
                  <li className="flex items-start"><span className="text-green-500 mr-3">✔</span><span><strong>12 weeks of live sessions.</strong> Sundays, 5pm UK time.</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-3">✔</span><span><strong>Win-Your-Money-Back Guarantee.</strong></span></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border border-navy-100">
                <h3 className="text-2xl font-bold mb-4">Bonuses:</h3>
                <ul className="space-y-4 text-lg text-navy-700">
                  <li className="flex items-start"><span className="text-yellow-400 mr-3">+</span><span>Direct Q&A with Ustadh Rhyad</span></li>
                  <li className="flex items-start"><span className="text-yellow-400 mr-3">+</span><span>Lifetime access to recordings</span></li>
                  <li className="flex items-start"><span className="text-yellow-400 mr-3">+</span><span>Community and accountability</span></li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12 bg-white p-8 rounded-lg border border-navy-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">The Investment</h3>
              <p className="text-5xl font-bold text-navy-800 mb-2">$120</p>
              <p className="text-lg text-navy-600/90 mb-4">That’s just $10 per lesson.</p>
              <p className="text-sm text-navy-500">Pay in 3 instalments at checkout.</p>
            </div>
          </div>
        </MotionSection>

        {/* Teacher Section */}
        <MotionSection className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/ustadh-rhyad.jpg" alt="Ustadh Rhyad" className="rounded-lg shadow-2xl w-full"/>
              </div>
              <div>
                <SectionTitle>Your Teacher</SectionTitle>
                <p className="text-lg text-navy-700/90 mb-4">Ustadh Rhyad is an Islamic teacher, da’ee, and committed student of knowledge who studied all the major Islamic sciences under Shaykh Baha al-Majlisi in Mauritania. He holds an ijazah (formal authorisation) in all the sciences he studied and is currently continuing his Qur’an studies in Madinah. Ustadh Rhyad currently teaches 230+ students around the world.</p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-navy-800 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-lighthouse-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-lighthouse-700/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Illuminate isn’t always open.</h2>
            <p className="text-xl text-white/80 mb-8">Once this cohort begins, enrollment closes. Your reset starts the moment you commit.</p>
            <button className="bg-lighthouse-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-lighthouse-600 transition-colors shadow-lg">👉 Join The Cohort Now</button>
            <p className="mt-4"><a href="#" className="text-white/70 hover:text-white underline">or Register for the Waitlist</a></p>
          </div>
        </MotionSection>
      </main>
    </div>
  );
};

export default SalesPage;
