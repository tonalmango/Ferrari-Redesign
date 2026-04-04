import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import carSf90 from "@/assets/car-sf90.jpg";
import car296gtb from "@/assets/car-296gtb.jpg";
import carRoma from "@/assets/car-roma.jpg";
import carPurosangue from "@/assets/car-purosangue.jpg";

const models = [
  { name: "SF90 Stradale", tagline: "Hybrid supercar redefining performance", image: carSf90, hp: "1000 CV", speed: "340 km/h" },
  { name: "296 GTB", tagline: "The evolution of the berlinetta concept", image: car296gtb, hp: "830 CV", speed: "330 km/h" },
  { name: "Roma", tagline: "Timeless elegance, contemporary design", image: carRoma, hp: "620 CV", speed: "320 km/h" },
  { name: "Purosangue", tagline: "Ferrari's four-door, four-seater", image: carPurosangue, hp: "725 CV", speed: "310 km/h" },
];

const ModelsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="models" ref={containerRef} className="relative h-[250vh] sm:h-[280vh] md:h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="section-padding mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Sports Cars
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground"
          >
            Discover the Ferrari Line Up
          </motion.h2>
        </div>

        <motion.div className="flex gap-8 pl-6 md:pl-20" style={{ x }}>
          {models.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] cursor-pointer"
            >
              <div className="relative overflow-hidden bg-card">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="h-[2px] w-0 bg-primary mb-4 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{car.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{car.tagline}</p>
                  <div className="flex gap-6 mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-display text-sm text-primary">{car.hp}</span>
                    <span className="font-display text-sm text-muted-foreground">{car.speed}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsShowcase;
