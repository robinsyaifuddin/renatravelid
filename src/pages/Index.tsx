
import React from 'react';
import Header from '@/components/Header';
import GalleryShowcase from '@/components/GalleryShowcase';
import TourGrid from '@/components/TourGrid';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GalleryShowcase />
        <TourGrid />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
