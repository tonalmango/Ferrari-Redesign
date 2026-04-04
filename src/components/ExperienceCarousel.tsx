import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, X } from "lucide-react";

interface ExperienceCard {
  id: string;
  category: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: "1",
    category: "Collections",
    title: "New Arrivals",
    image: "/experiences/WhatsApp Image 2026-04-04 at 1.46.44 PM.jpeg",
    link: "#",
  },
  {
    id: "2",
    category: "Ferrari Museums",
    title: "Greatest Hits",
    description: "Discover the iconic models that shaped Ferrari history",
    image: "/experiences/download.jpg",
    link: "#",
  },
  {
    id: "3",
    category: "Magazine",
    title: "Restored, Just As Richie Raced It",
    description: "A journey through time with one of Ferrari's most legendary vehicles",
    image: "/experiences/download (1).jpg",
    link: "#",
  },
  {
    id: "4",
    category: "Scuderia Ferrari",
    title: "Replica 2026",
    description: "Experience the passion and heritage of Scuderia Ferrari",
    image: "/experiences/WhatsApp Image 2026-04-04 at 1.36.26 PM.jpeg",
    link: "#",
  },
  {
    id: "5",
    category: "Magazine",
    title: "A 50-Year Love Affair",
    description: "Celebrating five decades of Ferrari excellence and passion",
    image: "/experiences/5ddbd834f8fc7b0aa908148a-ferrari-125-s-thumb.avif",
    link: "#",
  },
  {
    id: "6",
    category: "Sports Cars",
    title: "Past Models",
    description: "Explore the evolution of Ferrari's iconic sports car lineup",
    image: "/experiences/WhatsApp Image 2026-04-04 at 1.46.51 PM.jpeg",
    link: "#",
  },
];

const ExperienceCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative bg-background py-12 md:py-20 section-padding overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-red-950/5 to-transparent blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary/60 mb-6">
            Curated Collections
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Explore Our <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent"
              >
                Premium Heritage
              </motion.span>
            </h2>
          </div>
        </motion.div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          {/* Large featured card - spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 group cursor-pointer"
            onClick={() => setSelectedCard(experienceCards[0].id)}
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl"
            >
              {/* Card image */}
              <img
                src={experienceCards[0].image}
                alt={experienceCards[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect fill='%232a2a2a' width='600' height='600'/%3E%3C/svg%3E";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Premium Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-10 backdrop-blur-sm bg-black/40 border-t border-white/10"
              >
                <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/80 mb-3">
                  {experienceCards[0].category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {experienceCards[0].title}
                </h3>
                <motion.a
                  href={experienceCards[0].link}
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-4 group/btn"
                >
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-foreground/80 group-hover/btn:text-primary transition-colors">
                    Discover
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary/10 transition-all"
                    whileHover={{ rotate: 45 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              </motion.div>

              {/* Border overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - two cards stacked */}
          <div className="md:col-span-5 grid grid-cols-1 gap-8 md:gap-10">
            {experienceCards.slice(1, 3).map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="group cursor-pointer h-[280px]"
                onClick={() => setSelectedCard(card.id)}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative h-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 280'%3E%3Crect fill='%232a2a2a' width='500' height='280'/%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-primary/80 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {card.category}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2">
                      {card.title}
                    </h3>
                    <motion.a
                      href={card.link}
                      whileHover={{ x: 6 }}
                      className="inline-flex items-center gap-2 group/btn opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground/70 group-hover/btn:text-primary transition-colors">
                        Discover
                      </span>
                      <ChevronRight className="w-3 h-3" />
                    </motion.a>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Grid - 3 cards equal width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
          {experienceCards.slice(3).map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer h-[350px]"
              onClick={() => setSelectedCard(card.id)}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full overflow-hidden rounded-2xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 350'%3E%3Crect fill='%232a2a2a' width='400' height='350'/%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-primary/70 mb-2">
                    {card.category}
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-4 line-clamp-2">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="font-body text-xs text-foreground/60 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.description}
                    </p>
                  )}
                  <motion.a
                    href={card.link}
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-2 group/btn"
                  >
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground/70 group-hover/btn:text-primary transition-colors">
                      Discover
                    </span>
                    <ChevronRight className="w-3 h-3" />
                  </motion.a>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected card */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={experienceCards.find((c) => c.id === selectedCard)?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
                      {experienceCards.find((c) => c.id === selectedCard)?.category}
                    </p>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {experienceCards.find((c) => c.id === selectedCard)?.title}
                    </h2>
                    {experienceCards.find((c) => c.id === selectedCard)?.description && (
                      <p className="font-body text-base text-foreground/70 leading-relaxed">
                        {experienceCards.find((c) => c.id === selectedCard)?.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <a
                      href="#"
                      className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
                    >
                      Learn More
                    </a>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
