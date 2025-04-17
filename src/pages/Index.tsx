
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Sciences from '@/components/Sciences';
import Teachers from '@/components/Teachers';
import Mauritania from '@/components/Mauritania';
import Testimonials from '@/components/Testimonials';
import Books from '@/components/Books';
import Pricing from '@/components/Pricing';
import ProgressCallout from '@/components/ProgressCallout';
import FreeLesson from '@/components/FreeLesson';
import Footer from '@/components/Footer';
import LearningExperience from '@/components/LearningExperience';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LearningExperience />
      <Books />
      <Introduction />
      <Sciences />
      <Teachers />
      <Mauritania />
      <Testimonials />
      <Pricing />
      <ProgressCallout />
      <FreeLesson />
      <Footer />
    </div>
  );
};

export default Index;
