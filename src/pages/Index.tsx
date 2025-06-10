import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/components/TechStackSection';
import WhatIsSection from '@/components/WhatIsSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowToLaunchSection from '@/components/HowToLaunchSection';
import FeaturesSection from '@/components/FeaturesSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import StatsSection from '@/components/StatsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import BackgroundGrid from '@/components/BackgroundGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <BackgroundGrid />
        <HeroSection />
        <TechStackSection />
        <WhatIsSection />
        <BenefitsSection />
        <HowToLaunchSection />
        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;