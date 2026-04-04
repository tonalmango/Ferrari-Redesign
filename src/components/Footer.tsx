import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, Music, MessageCircle, Youtube } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(footerRef, { once: true, margin: "-100px" });
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "TikTok", icon: Music, href: "#" },
    { name: "Twitch", icon: MessageCircle, href: "#" },
    { name: "X", icon: MessageCircle, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  const legalLinks1 = [
    "Legal",
    "Privacy Section",
    "Cookie Policy",
    "Do Not Sell My Personal Information",
    "Submit your privacy request under GDPR",
    "Preference Center",
    "International",
  ];

  const legalLinks2 = [
    "Accessibility",
    "Contacts",
    "Corporate",
    "Responsible Disclosure",
    "Reward Anticounterfeiting",
    "Media Centre",
  ];

  const navSections = [
    { title: "Racing", links: ["Formula 1", "Endurance", "Esports"] },
    { title: "Sports Cars", links: ["Car Range", "Configure", "Past Models"] },
    { title: "Experiences", links: ["Ferrari Museums", "Driving Courses", "Corse Clienti"] },
    { title: "About Us", links: ["Corporate", "Careers", "Sustainability"] },
  ];

  return (
    <footer id="about" ref={footerRef} className="border-t border-border bg-foreground/5 py-12 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="pb-16 border-b border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="group flex items-center gap-3 hover:gap-4 transition-all duration-300"
                >
                  <div className="relative">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="absolute -top-1 -right-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      +
                    </span>
                  </div>
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Main Navigation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 py-8 border-b border-border/50"
        >
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-lg font-bold tracking-[0.2em] uppercase text-foreground">
              Ferrari
            </span>
            <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">
              Maranello, Italy
            </p>
          </div>

          {navSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-4 font-semibold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="py-8 border-b border-border/50 text-center"
        >
          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone inferiore No. 4, I-43053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977
          </p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies' Register of Modena, VAT and Tax number DO1995950360 and share capital of Euro 20,260,000
          </p>
          <p className="font-body text-xs text-muted-foreground mt-6">
            Copyright 2026 - All rights reserved
          </p>
        </motion.div>

        {/* Accessibility & Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8"
        >
          <div className="mb-8 text-center">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" />
                <path d="M4 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4" />
                <path d="M8 12h8" />
              </svg>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors">
                Accessibility Settings
              </span>
            </button>
          </div>

          {/* Legal Links Row 1 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 pb-8 border-b border-border/50">
            {legalLinks1.map((link, idx) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Legal Links Row 2 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {legalLinks2.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
