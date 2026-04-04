import { motion } from "framer-motion";

const timeline = [
  { year: "1947", title: "The Birth of Ferrari", desc: "Enzo Ferrari founds the company in Maranello, beginning a legacy of racing and automotive excellence." },
  { year: "1951", title: "First Formula 1 Grand Prix Victory", desc: "Ferrari claims its inaugural Formula 1 win, marking the start of decades of championship racing." },
  { year: "1975", title: "World Championship Glory", desc: "A dominant season cements Ferrari's position as the most iconic team in Formula 1 history." },
  { year: "2000", title: "A New Era of Dominance", desc: "Ferrari begins a record-breaking run of consecutive Constructors' and Drivers' Championships." },
  { year: "2026", title: "Pushing Boundaries", desc: "The Scuderia continues to innovate, combining hybrid technology with a relentless pursuit of victory." },
];

const RacingHeritage = () => {
  return (
    <section id="heritage" className="relative py-32 md:py-48 section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
      >
        Scuderia Ferrari
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-6xl font-bold text-foreground mb-20"
      >
        Racing Heritage
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative flex items-start mb-16 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } pl-12 md:pl-0`}
          >
            <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
              <span className="font-display text-5xl font-bold text-primary/20">{item.year}</span>
            </div>

            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary animate-glow-pulse z-10" />

            <div className={`flex-1 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
              <span className="md:hidden font-display text-2xl font-bold text-primary/40">{item.year}</span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RacingHeritage;
