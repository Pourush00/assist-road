import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
