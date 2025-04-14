
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Teachers from '@/components/Teachers';
import Mauritania from '@/components/Mauritania';
import Testimonials from '@/components/Testimonials';
import Books from '@/components/Books';
import Pricing from '@/components/Pricing';
import ProgressCallout from '@/components/ProgressCallout';
import FreeLesson from '@/components/FreeLesson';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <Teachers />
      <Mauritania />
      <Testimonials />
      <Books />
      <Pricing />
      <ProgressCallout />
      <FreeLesson />
      <Footer />
    </div>
  );
};

export default Index;
