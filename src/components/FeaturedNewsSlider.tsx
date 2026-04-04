import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredNewsSlides } from "@/data/featuredNewsSlides";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const textVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 48 : -48,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

const imageVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 64 : -64,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 64 : -64,
    opacity: 0,
    scale: 0.96,
  }),
};

const FeaturedNewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imageBroken, setImageBroken] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const count = featuredNewsSlides.length;
  const slide = featuredNewsSlides[index];

  const goTo = useCallback(
    (next: number) => {
      const len = featuredNewsSlides.length;
      const wrapped = ((next % len) + len) % len;
      if (wrapped === index) return;
      const forward = (wrapped - index + len) % len;
      const backward = (index - wrapped + len) % len;
      setDirection(forward <= backward ? 1 : -1);
      setIndex(wrapped);
    },
    [index]
  );

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    setImageBroken(false);
  }, [index, slide.imageSrc]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => clearInterval(autoplayTimer);
  }, [count]);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative bg-background py-12 md:py-16 section-padding overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 56 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: easeSmooth }}
        className="relative max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.6, ease: easeSmooth }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          News
        </motion.p>

        <div className="relative grid gap-12 md:gap-16 md:grid-cols-[1fr_1.05fr] items-center min-h-[min(70vh,520px)]">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 -translate-x-12 md:-translate-x-16 lg:-translate-x-20 -translate-y-1/2 p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 stroke-[2]" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-0 top-1/2 z-20 translate-x-12 md:translate-x-16 lg:translate-x-20 -translate-y-1/2 p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 stroke-[2]" />
          </button>

          <div className="pl-0 pr-0 md:pl-6 md:pr-0 lg:pl-8 lg:pr-0">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id + "-text"}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: easeSmooth }}
              >
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] font-bold text-foreground leading-[1.15] uppercase tracking-tight">
                  {slide.title}
                </h2>
                {slide.subtitle ? (
                  <p className="mt-3 font-display text-lg md:text-xl font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {slide.subtitle}
                  </p>
                ) : null}
                <p className="font-body text-sm md:text-base text-muted-foreground mt-6 leading-relaxed max-w-xl">
                  {slide.body}
                </p>
                {slide.showReadMore ? (
                  <a
                    href="#"
                    className="read-more-link inline-flex items-center gap-3 mt-8 font-body text-xs tracking-[0.2em] uppercase text-white group"
                  >
                    <span>Read more</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 border-2 border-red-500 text-white transition-all duration-300 group-hover:bg-red-500 group-hover:border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.4)] group-hover:shadow-[0_0_24px_rgba(239,68,68,0.7)] group-hover:scale-110">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </a>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] w-full max-h-[480px] mx-auto lg:max-h-none rounded-sm overflow-hidden border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id + "-img"}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: easeSmooth }}
                className="absolute inset-0"
              >
                {!imageBroken ? (
                  <img
                    src={slide.imageSrc}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={() => setImageBroken(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-muted px-6 text-center">
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Image placeholder
                    </span>
                    <span className="font-body text-[11px] text-muted-foreground/80 max-w-[240px] leading-relaxed">
                      Add your file as{" "}
                      <code className="text-foreground/90">
                        public/featured-news/slide-{index + 1}.jpg
                      </code>{" "}
                      or update{" "}
                      <code className="text-foreground/90">imageSrc</code> in{" "}
                      <code className="text-foreground/90">
                        src/data/featuredNewsSlides.ts
                      </code>
                      .
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.65, ease: easeSmooth }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          <div className="flex items-center gap-2.5">
            {featuredNewsSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className="p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              >
                {i === index ? (
                  <span className="block h-2.5 w-2.5 rounded-full border-2 border-primary bg-background shadow-[0_0_0_1px_hsl(var(--primary)/0.35)]" />
                ) : (
                  <span className="block h-2 w-2 rounded-full bg-muted-foreground/45 hover:bg-muted-foreground/70 transition-colors" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:block h-px w-12 bg-border" />
            <a
              href="#"
              className="font-body text-[11px] tracking-[0.28em] uppercase text-foreground/90 hover:text-primary transition-colors duration-300"
            >
              View all news
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedNewsSlider;
