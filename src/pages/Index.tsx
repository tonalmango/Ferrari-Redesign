import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsShowcase from "@/components/ModelsShowcase";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import FeaturedNewsSlider from "@/components/FeaturedNewsSlider";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <Navbar />
          <main>
            <HeroSection />
            <ModelsShowcase />
            <FeaturedNewsSlider />
            <ExperienceCarousel />
            <Newsletter />
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </>
  );
};

export default Index;
