# CADEXR Portfolio Site

A modern, flashy portfolio website showcasing Cade Gilbert's work in XR/VR development, game design, and AI research. Built with Next.js, TypeScript, and cutting-edge web technologies.

## ✨ Features

- **Immersive 3D Background** - Animated space scene with floating orbs and stars
- **Interactive Particle System** - Mouse-responsive particles with dynamic connections
- **Glass Morphism Design** - Modern frosted glass effects throughout
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modal System** - Elegant modal windows for About, Portfolio, and Social sections
- **Project Showcase** - Interactive portfolio with filtering and categorization
- **Contact Integration** - Social links and contact forms
- **Performance Optimized** - Fast loading with Next.js optimizations

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cadexr-portfolio.git
   cd cadexr-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors and Theming
The site uses a custom color palette defined in `tailwind.config.js`:
- Primary: Orange gradient (`#f2751f` to `#f59347`)
- Neon accents: Blue (`#00d4ff`), Purple (`#8b5cf6`), Pink (`#ec4899`), Green (`#10b981`)
- Dark theme: Various shades of gray

### Fonts
- **Conthrax**: Custom font for headers and branding
- **Source Sans Pro**: Google Font for body text

### Content Updates
- **About Section**: Edit `components/AboutModal.tsx`
- **Portfolio Projects**: Update the projects array in `components/PortfolioModal.tsx`
- **Social Links**: Modify the socialLinks array in `components/SocialModal.tsx`

## 📁 Project Structure

```
cadexr-portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/
│   ├── AnimatedBackground.tsx   # 3D space background
│   ├── ParticleSystem.tsx       # Interactive particles
│   ├── Navigation.tsx           # Navigation bar
│   ├── HeroSection.tsx          # Main hero section
│   ├── AboutModal.tsx           # About information modal
│   ├── PortfolioModal.tsx       # Projects showcase modal
│   └── SocialModal.tsx          # Contact and social links modal
├── public/
│   └── fonts/               # Custom font files
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Key Components

### AnimatedBackground
- Three.js powered 3D space scene
- Animated stars and floating orbs
- Auto-rotating camera for dynamic effect

### ParticleSystem
- Canvas-based particle animation
- Mouse interaction and attraction
- Dynamic particle connections

### Modal System
- Glass morphism design
- Smooth enter/exit animations
- Responsive layouts
- Keyboard navigation support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for 3D graphics
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide** for icons
- **Next.js** for the framework

## 📞 Contact

- **Email**: xr.cadeg@gmail.com
- **LinkedIn**: [Cade Gilbert](https://linkedin.com/in/cadegilbert)
- **GitHub**: [@cadexr](https://github.com/cadexr)
- **Twitter**: [@cadexr](https://twitter.com/cadexr)

---

Built with ❤️ by Cade Gilbert for the XR/VR community
