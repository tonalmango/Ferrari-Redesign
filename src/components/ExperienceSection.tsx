import { motion } from "framer-motion";
import experienceImg from "@/assets/experience.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 md:py-48">
      <div className="section-padding grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Ferrari Experiences
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            The Ferrari
            <br />
            <span className="ferrari-gradient-text">World.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-6 leading-relaxed max-w-md">
            From the Ferrari Museums in Maranello and Modena to exclusive driving experiences on legendary circuits — immerse yourself in the world of the Prancing Horse.
          </p>
          <a
            href="#"
            className="inline-block mt-8 font-body text-xs tracking-[0.15em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300"
          >
            Explore Experiences
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="overflow-hidden">
            <img
              src={experienceImg}
              alt="Ferrari driving experience"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
