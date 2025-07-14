import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LearnActGrow from '@/components/LearnActGrow';
import PathSection from '@/components/PathSection';
import Testimonials from '../components/Testimonials';
import Teachers from '@/components/Teachers';
import Pricing from '@/components/Pricing';
import FreeLesson from '@/components/FreeLesson';
import Footer from '@/components/Footer';
import ComparisonTable from '../components/ComparisonTable';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-center">
      <Navbar />
      <Hero />
      <LearnActGrow />
      <div className="relative z-40">
        <PathSection />
      </div>

      <Teachers />
      <Testimonials />
      <Pricing />
      <ComparisonTable />
      <FreeLesson />
      {/* Final CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-lighthouse-500 to-lighthouse-700 text-white py-10 md:py-20 px-4 text-center rounded-3xl mx-4 md:mx-auto max-w-6xl my-16 shadow-2xl">
        <div className="absolute top-0 left-0 w-64 h-64 bg-lighthouse-400 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-lighthouse-600 opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          You don’t need more <span className="text-lighthouse-200 hover:text-white transition duration-200 ease-in-out">Islamic content</span> — you need <span className="text-lighthouse-200 hover:text-white transition duration-200 ease-in-out">transformation</span>.
        </h2>
        <p className="text-lg md:text-2xl font-medium mb-8 opacity-90">Start your journey now, one action at a time.</p>
        <a href="https://www.muslimlighthouse.app/checkout/premium-membership" className="bg-white text-lighthouse-800 font-bold py-4 px-10 rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out inline-block">Join Now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
