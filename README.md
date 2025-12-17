<div align="center">

  <h1 align="center">🚀 Jashan Goyal - Modern Portfolio</h1>

   <div align="center">
     <p>A stunning, interactive portfolio showcasing cutting-edge web development skills, modern design patterns, and innovative project implementations.</p>
     <p>🌟 <strong>Featured Projects:</strong> Secure Vault • Polygon Area Calculator • Samadhaan</p>
   </div>
</div>

---

## 📋 Table of Contents

1. [🚀 Overview](#overview)
2. [✨ Features](#features)
3. [🛠️ Tech Stack](#tech-stack)
4. [📸 Portfolio Showcase](#showcase)
5. [🚀 Featured Projects](#projects)
6. [⚡ Quick Start](#quick-start)
7. [📂 Project Structure](#structure)
8. [🎨 UI Components](#components)
9. [🔧 Configuration](#configuration)
10. [🤝 Connect](#connect)

---

## <a name="overview">🚀 Overview</a>

Welcome to my modern, interactive portfolio built with **Next.js 14**, **TypeScript**, and cutting-edge web technologies. This portfolio demonstrates advanced web development skills through:

- 🎨 **Modern UI/UX Design** with smooth animations and interactive elements
- 🌟 **3D Graphics Integration** using Three.js for immersive experiences  
- ⚡ **Performance Optimized** with Next.js App Router and server components
- 📱 **Fully Responsive** design that works flawlessly across all devices
- 🎭 **Advanced Animations** powered by Framer Motion
- 🔮 **Interactive Components** including dynamic grids and hover effects

---

## <a name="features">✨ Features</a>

### 🏠 **Hero Section**
- Dynamic spotlight effects with smooth animations
- Interactive background with particle systems
- Call-to-action buttons with hover effects
- Resume download functionality

### 🧩 **Bento Grid Layout**
<img src="/public/assets/readme/bentogrdi.png" alt="Modern Bento Grid Layout" width="600">

- Modern CSS Grid implementation
- Interactive hover effects and animations
- Responsive design across all screen sizes
- Email copy functionality with visual feedback

### 🚀 **Projects Showcase**
- **Secure Vault**: Full Stack password manager
- **Polygon Area Calculator**
- **Samadhaan**: One Stop Grievance Portal
- GitHub integration with live project links
- Detailed project descriptions and tech stacks

### 🎯 **Additional Features**
- **Responsive Navigation** with smooth scrolling
- **Contact Form** with email integration
- **Social Media Links** (GitHub, LinkedIn, Twitter)
- **Dark/Light Theme** support
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading

---

## <a name="tech-stack">🛠️ Tech Stack</a>

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe development

### **Styling & Design**
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **CSS Grid & Flexbox** - Modern layout techniques

### **3D & Animations** 
- **Three.js** - 3D graphics and interactive elements
- **GSAP** - High-performance animations
- **Canvas API** - Custom visual effects

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vercel** - Deployment and hosting

---

## <a name="projects">🚀 Featured Projects</a>

### 1. 🧠 **Secure Vault** - Full Stack Password manager
```
🔗 GitHub: https://github.com/JashanGoyal-85/Secure_Vault
🛠️ Tech: Next.js, React, TypeScript, TailwindCSS
📝 Description: AI-powered platform generating personalized project ideas for developers
```

### 2. 📊 **Polygon Area Calculator**  
```
🔗 GitHub: https://github.com/JashanGoyal-85/Polygon-Area-Calculator
🛠️ Tech: React, JavaScript, Node.js, TailwindCSS
📝 Description: Comprehensive platform for learning data structures and algorithms
```

### 3. 🔗 **Samadhaan** - One Step Grievance Portal
```
🔗 GitHub: https://github.com/JashanGoyal-85/Samadhaan
🛠️ Tech: Next.js, React, MongoDB, TailwindCSS
📝 Description: Modern URL shortener with analytics and QR code generation
```

---

## <a name="quick-start">⚡ Quick Start</a>

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation Steps**

1. **Clone the repository**
```bash
git clone https://github.com/JashanGoyal-85/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

### **Build for Production**
```bash
npm run build
npm start
```

---

## <a name="structure">📂 Project Structure</a>

```
📦 Portfolio-Template
├── 📁 app/                    # Next.js App Router
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Home page
│   ├── 📄 globals.css        # Global styles
│   └── 📄 provider.tsx       # Theme provider
├── 📁 components/             # React components
│   ├── 📁 ui/                # UI components
│   │   ├── 📄 BentoGrid.tsx  # Grid layout
│   │   ├── 📄 FloatingNavbar.tsx
│   │   └── 📄 ...
│   ├── 📄 Hero.tsx           # Hero section
│   ├── 📄 Projects.tsx       # Projects showcase
│   ├── 📄 Footer.tsx         # Footer component
│   └── 📄 ...
├── 📁 data/                  # Data and configurations
│   └── 📄 index.ts          # Site data
├── 📁 public/               # Static assets
│   ├── 📁 assets/           # Images and icons
│   └── 📄 ...
├── 📄 constants.ts          # Project constants
├── 📄 tailwind.config.ts    # Tailwind configuration
└── 📄 next.config.mjs       # Next.js configuration
```

---

## <a name="components">🎨 UI Components</a>

### **Key Components**

#### 🏠 Hero Section
```typescript
// Dynamic hero with animations and CTA buttons
<Hero />
```

#### 🧩 Bento Grid
```typescript
// Modern grid layout with interactive cards
<BentoGrid />
```

#### 🚀 Projects Display
```typescript
// Project showcase with GitHub integration
<Projects />
```

#### 💬 Testimonials
```typescript
// Animated testimonial carousel
<Testimonials />
```

#### 🔗 Navigation
```typescript
// Floating navigation with smooth scroll
<FloatingNavbar />
```

---

## <a name="configuration">🔧 Configuration</a>

### **Environment Setup**
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_USERNAME=ksparth12
```

### **Customization**
- **Colors**: Modify `tailwind.config.ts` for custom themes
- **Content**: Update `data/index.ts` for personal information  
- **Projects**: Edit `constants.ts` for project data
- **Styling**: Customize `app/globals.css` for global styles

### **Deploy to Vercel**
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ksparth12/Portfolio-Template)

---

## <a name="connect">🤝 Connect with Parth</a>

<div align="center">

### 🌟 **Let's Build Something Amazing Together!**

I'm always excited to work on innovative projects and collaborate with fellow developers.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ksparth12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ksparth12)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/ksparth12)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ksparth12@gmail.com)

**📧 Email**: ksparth12@gmail.com  
**🌐 Portfolio**: [View Live Portfolio](https://your-domain.com)  
**📄 Resume**: [Download Resume](https://drive.google.com/file/d/1d9ALAgqR8nv9rUy-vGRJV8RBR5E19Kop/view?usp=drive_link)

---

<p><strong>⭐ If you found this portfolio inspiring, please give it a star!</strong></p>
<p><em>Built with ❤️ by Parth Sharma using Next.js and modern web technologies</em></p>

</div>
