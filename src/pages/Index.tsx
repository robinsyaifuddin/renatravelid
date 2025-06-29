
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TourGrid from '@/components/TourGrid';
import TourCalendar from '@/components/TourCalendar';
import GalleryShowcase from '@/components/GalleryShowcase';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <GalleryShowcase />
        <TourGrid />
        <TourCalendar />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
