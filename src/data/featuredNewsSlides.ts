export type FeaturedNewsSlide = {
  id: string;
  /** Place files under `public/featured-news/` as slide-1.jpg … slide-4.jpg (or update paths below). */
  imageSrc: string;
  title: string;
  subtitle?: string;
  body: string;
  showReadMore: boolean;
};

export const featuredNewsSlides: FeaturedNewsSlide[] = [
  {
    id: "1",
    imageSrc: "/featured-news/ferrari-unveils-2026-livery-of-499p-GTW2.avif",
    title: "Ferrari unveils 2026 livery of 499P",
    subtitle: "Set to defend",
    body:
      "Ferrari has officially launched the 2026 season, which will see the Prancing Horse return to the FIA World Endurance Championship to defend the Manufacturers' and Drivers' world titles secured in an unforgettable and already historic 2025 campaign.",
    showReadMore: true,
  },
  {
    id: "2",
    imageSrc: "/featured-news/WhatsApp Image 2026-04-04 at 11.57.10 AM.jpeg",
    title: "Italy Half Marathon 2026: 15,000 registered runners",
    body:
      "In a weekend that will remain etched in the memories of thousands of participants and spectators, the 2026 edition of the Italy Half Marathon – Enzo Ferrari Memorial has come to a close.",
    showReadMore: true,
  },
  {
    id: "3",
    imageSrc: "/featured-news/ferrari-luce-magazine-news-RULLO2.avif",
    title: "Behind the vision",
    body:
      "An inside look at the creative and production process shaping the new Ferrari Luce, captured in a film series told from a perspective rarely explored",
    showReadMore: true,
  },
  {
    id: "4",
    imageSrc: "/featured-news/img1.jpeg",
    title: "Charles delivers another podium for the Scuderia",
    body:
      "Scuderia Ferrari HP leaves Japan with a third podium from as many races, thanks to a third place finish from Charles Leclerc.",
    showReadMore: true,
  },
];
