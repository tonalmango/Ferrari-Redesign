import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const useCountUp = (end: number, duration: number, inView: boolean, decimals = 1) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView, decimals]);
  return count;
};

const stats = [
  { value: 2.5, label: "0–100 km/h", suffix: "s", decimals: 1 },
  { value: 340, label: "Top Speed", suffix: " km/h", decimals: 0 },
  { value: 1000, label: "Max Power", suffix: " CV", decimals: 0 },
];

const PerformanceStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(var(--ferrari-red) / 0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 section-padding text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Performance
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl font-bold text-foreground mb-20"
        >
          Pure Power
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const count = useCountUp(stat.value, 1500, inView, stat.decimals);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <span className="font-display text-6xl md:text-8xl font-bold ferrari-gradient-text">
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)}
        <span className="text-3xl md:text-4xl text-muted-foreground">{stat.suffix}</span>
      </span>
      <span className="mt-4 font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  );
};

export default PerformanceStats;
