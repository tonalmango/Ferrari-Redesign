import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const newsImage = "file:///C:/Soham_VS/silicon/6901de3c3db74b0020cc8c80-ferrari-mezza-maratona-italia-2026-image-2.avif";

const slides = [
  {
    label: "Race Day",
    heading: "Italy Half Marathon 2026:",
    subtitle: "15,000 Registered Runners",
    description:
      "In a weekend that will remain etched in the memories of thousands of participants and spectators, the 2026 edition of the Italy Half Marathon – Enzo Ferrari Memorial has come to a close.",
  },
  {
    label: "Finish Line",
    heading: "Ferrari Memorial Race",
    subtitle: "A Legendary Finish Line",
    description:
      "From the start grid to the final sprint, the event captured the speed and spirit of the Ferrari legacy in every stride.",
  },
  {
    label: "Circuit Heat",
    heading: "Ferrari Spirit Lives On",
    subtitle: "Speed and Passion",
    description:
      "The marathon blended sport and spectacle, turning the streets into a high-performance circuit of unforgettable moments.",
  },
];

const NewsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="news" className="relative py-32 md:py-48 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,0,0,0.18),_transparent_28%),linear-gradient(180deg,_rgba(0,0,0,0.75),_rgba(0,0,0,0.95))]" />
      <div className="relative grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          key={`text-${activeSlide}`}
          initial={{ opacity: 0, x: -60, skewY: 5 }}
          animate={{ opacity: 1, x: 0, skewY: 0 }}
          exit={{ opacity: 0, x: 60, skewY: -5 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Latest News
          </p>
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {slides[activeSlide].heading}
              <br />
              {slides[activeSlide].subtitle}
            </h2>
          </div>
          <p className="font-body text-base text-muted-foreground mt-6 leading-relaxed max-w-xl">
            {slides[activeSlide].description}
          </p>
          <a
            href="#"
            className="read-more-link group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#ff2500] bg-[#120405] px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#ff2500] shadow-[0_0_40px_rgba(255,38,0,0.2)] transition duration-300 hover:border-transparent hover:bg-[#ff2500] hover:text-[#120405] focus:outline-none focus:ring-2 focus:ring-[#ff2500]/30"
          >
            <span className="absolute left-4 top-1/2 h-1 w-10 -translate-y-1/2 rounded-full bg-white/15 blur-sm" />
            <span className="relative z-10">Read More</span>
          </a>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="absolute -left-16 top-1/4 h-32 w-2 bg-red-600/40 blur-xl" />
          <div className="absolute -right-16 bottom-1/4 h-32 w-2 bg-red-600/40 blur-xl" />
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide}
              src={newsImage}
              alt={slides[activeSlide].subtitle}
              loading="lazy"
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.95 }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="w-full aspect-[4/3] object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,_rgba(0,0,0,0),_rgba(0,0,0,0.65))]" />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              onClick={() => setActiveSlide(index)}
              aria-label={`Select ${slide.label}`}
              className={`relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                index === activeSlide
                  ? "border-[#ff2500] bg-[#ff2500] text-black shadow-[0_0_30px_rgba(255,37,0,0.35)]"
                  : "border-white/15 bg-black/40 text-white/70 hover:border-[#ff2500] hover:bg-[#ff2500]/20 hover:text-white"
              }`}
            >
              <span className="absolute inset-[6px] rounded-full bg-black/40" />
              <span className="relative z-10 text-[0.65rem] uppercase tracking-[0.35em]">
                {index + 1}
              </span>
            </button>
          ))}
        </div>

        <a
          href="#"
          className="text-sm font-display uppercase tracking-[0.35em] text-primary transition duration-300 hover:text-primary-foreground"
        >
          View All News
        </a>
      </div>
    </section>
  );
};

export default NewsSection;
