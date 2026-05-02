# Ferrari Redesign - Premium Brand Experience Website

A modern, responsive Ferrari-themed website showcasing luxury automotive design with cutting-edge web technologies and premium animations.

## 🏎️ Project Overview

This is a premium brand experience website for Ferrari, featuring:
- **Hero Section** with interactive 3D Ferrari model and smoke effects
- **Featured News Carousel** with auto-rotating content
- **Experience Gallery** with asymmetrical grid layout and modal interactions
- **Newsletter Subscription** with smooth animations
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth Animations** powered by Framer Motion
- **Dark Theme** with Ferrari red accents

## 👥 Team

**Hackathon Project**

- **Sourav Mishra** - Team Lead & Full Stack Developer
  - Created core architecture and implementation
  - Designed and built all components
  - Implemented animations and interactions
  - Optimized for responsive design

- **Soham Kaushik Dash** - Design Assistant
  - Assisted with UI/UX design
  - Contributed to design refinement

- **Snigdharani Patnaik** - Design Assistant
  - Assisted with UI/UX design
  - Contributed to design refinement

## 🛠️ Technologies Used

### Frontend Framework
- **React** 18.x - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion** - Advanced animations and gesture handling
- **React Three Fiber** - 3D graphics
- **Three.js** - 3D rendering engine

### UI Components
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## 📋 Features

### Hero Section
- Full-screen responsive layout (100vh-120vh based on viewport)
- 3D Ferrari F50 model with interactive rotation
- Auto-rotating carousel with 5-second intervals
- Smoke particle effects
- Tangential gradient blending to next section
- Outlined button style with glow effect on hover

### Featured News Slider
- Auto-rotating news carousel
- Side-by-side layout (text + image)
- Smooth animations and transitions
- Dot navigation indicators
- Responsive image handling

### Experience Carousel
- Premium asymmetrical grid layout
- Featured card (large) + stacked cards + equal grid
- Click-to-modal functionality
- 6 experience categories with images
- Glass-morphism effects with backdrop blur

### Newsletter Section
- Email subscription form
- Animated mail icon badge
- Success confirmation message
- Responsive form inputs
- Ferrari theme integration

### Footer
- 7 social media links
- 4 navigation sections
- Legal links (2 rows)
- Company information
- One-time scroll-triggered animations

## 📱 Responsive Design

Optimized for all devices:
- **Mobile** (320px - 640px): Compact layouts, reduced heights, tight spacing
- **Tablet** (641px - 1024px): Medium spacing, optimized grids
- **Desktop** (1024px+): Full experience with extended heights and spacing

Mobile optimizations include:
- Responsive component heights
- Adjusted padding and gaps
- Mobile-friendly form inputs
- Touch-optimized interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/tonalmango/Ferrari-Redesign.git
cd Ferrari-Redesign

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── HeroSection.tsx
│   ├── HeroFerrari3D.tsx
│   ├── ModelsShowcase.tsx
│   ├── FeaturedNewsSlider.tsx
│   ├── ExperienceCarousel.tsx
│   ├── Newsletter.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   └── Index.tsx
├── data/               # Data files
│   └── featuredNewsSlides.ts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Global styles

public/
├── models/             # 3D models
├── featured-news/      # News slider images
└── experiences/        # Experience carousel images
```

## 🎨 Design System

### Color Palette
- **Primary**: Ferrari Red (`hsl(8 100% 50%)`)
- **Background**: Almost Black (`hsl(0 0% 3%)`)
- **Foreground**: Off-white (`hsl(0 0% 95%)`)
- **Accent**: Yellow (`hsl(45 100% 50%)`)

### Typography
- **Display Font**: Used for headings
- **Body Font**: Used for body text

### Effects
- Glass-morphism with backdrop blur
- Radial gradients with Ferrari red
- Smooth animations with Framer Motion
- Glow effects on interactive elements

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration
- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright E2E testing

## 🖼️ Image Assets

The project includes images placed in the `public/` directory:

### Featured News Images
- `ferrari-unveils-2026-livery-of-499p-GTW2.avif`
- `WhatsApp Image 2026-04-04 at 11.57.10 AM.jpeg`
- `ferrari-luce-magazine-news-RULLO2.avif`
- `img1.jpeg`

### Experience Gallery Images
- New Arrivals
- Greatest Hits
- Restored Collection
- Replica 2026
- 50-Year Collection
- Past Models

## 📊 Performance Optimizations

- Lazy loading of components with React Suspense
- Optimized image handling
- CSS-in-JS optimization with Tailwind
- Smooth scroll behavior
- One-time animations (no repeat on scroll)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project uses open-source technologies and libraries. See package.json for dependency licenses.

## 🤝 Contributing

This is a hackathon project. For information about modifications or contributions, please contact the project team.

## 📞 Contact

For questions or inquiries about this project, please reach out to the development team.

---

**Created for Hackathon**  
Team: Sourav Mishra (Lead), Soham Kaushik Dash, Snigdharani Patnaik  
Repository: https://github.com/tonalmango/Ferrari-Redesign
