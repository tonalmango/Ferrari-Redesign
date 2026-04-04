import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroFerrari3D = lazy(() => import("@/components/HeroFerrari3D"));

// Smoke particle component
const SmokeParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    duration: 4 + Math.random() * 2,
    x: Math.random() * 100,
    size: 40 + Math.random() * 80,
    opacity: 0.15 + Math.random() * 0.15,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: "-10%",
            background: "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(40px)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, particle.opacity, particle.opacity, 0],
            y: [-50, window.innerHeight + 100],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  );
};

const slides = [
  {
    category: "Racing",
    headline: "Scuderia Ferrari",
    cta: "Discover",
    ctaHref: "#racing",
  },
  {
    category: "Sports Cars",
    headline: "Start Your Engine",
    cta: "Discover the Ferrari Line Up",
    ctaHref: "#models",
  },
  {
    category: "Collections",
    headline: "New Arrivals",
    cta: "Discover",
    ctaHref: "#experience",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollRotation, setScrollRotation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateScrollRotation = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = rect.height || 1;
      const progress = Math.min(1, Math.max(0, -rect.top / h));
      setScrollRotation(progress * Math.PI * 2);
    };
    updateScrollRotation();
    window.addEventListener("scroll", updateScrollRotation, { passive: true });
    window.addEventListener("resize", updateScrollRotation);
    return () => {
      window.removeEventListener("scroll", updateScrollRotation);
      window.removeEventListener("resize", updateScrollRotation);
    };
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen sm:h-[110vh] md:h-[120vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,_rgb(127_29_29_/_0.8)_0%,_rgb(127_29_29_/_0.4)_40%,_transparent_100%)] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24 sm:after:h-32 md:after:h-48 after:bg-gradient-to-b after:from-transparent after:via-background/50 after:to-background after:pointer-events-none"
    >
      <SmokeParticles />

      <Suspense fallback={null}>
        <HeroFerrari3D
          scrollRotation={scrollRotation}
          slideIndex={activeSlide}
          slideCount={slides.length}
        />
      </Suspense>

      <div className="relative z-10 flex flex-col items-center justify-center h-full section-padding text-center">
        <motion.p
          key={`cat-${activeSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          {slide.category}
        </motion.p>

        <motion.h1
          key={`head-${activeSlide}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none tracking-tight"
        >
          {slide.headline.split(" ").length > 1 ? (
            <>
              {slide.headline.split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="ferrari-gradient-text">
                {slide.headline.split(" ").slice(-1)}
              </span>
            </>
          ) : (
            <span className="ferrari-gradient-text">{slide.headline}</span>
          )}
        </motion.h1>

        <motion.div
          key={`cta-${activeSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex gap-4"
        >
          <a
            href={slide.ctaHref}
            className="font-body text-xs tracking-[0.15em] uppercase px-8 py-4 bg-primary text-primary-foreground border-0 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(255,56,0,0.8)] hover:scale-105 transition-all duration-300"
          >
            {slide.cta}
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                i === activeSlide
                  ? "bg-primary border-primary scale-110"
                  : "bg-transparent border-muted-foreground/40 hover:border-foreground"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
