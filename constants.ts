import { Tag } from "./components/Project";

export interface MyProject {
  id: string | number;
  title: string;
  description: string;
  subDescription?: string[];
  href: string;
  logo?: string;
  image: string;
  tags: Tag[];
}

export const myProjects: MyProject[] = [
  {
    id: 1,
    title: "SecureVault: Full-Stack Password Manager",
    description:
      "A comprehensive security solution featuring a user dashboard and browser extension. Implements robust AES encryption for stored credentials and supports auto-fill functionality. Includes dedicated sections for Wi-Fi passwords and credit cards, plus a secure random password generator.",
    subDescription: [
      "Built with Next.js 15 and React 19 for a high-performance, responsive, and modern user interface.",
      "Utilizes Clerk for secure authentication and MongoDB for real-time data synchronization across all devices.",
      "Styled with Tailwind CSS 4 for a sleek, modern design and deployed seamlessly on Vercel.",
    ],
    href: "https://github.com/JashanGoyal-85/Secure_Vault",
    logo: "",
    image: "/assets/projects/SecureVault.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "TypeScript", path: "/ts.svg" },
      { id: 5, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 2,
    title: "Polygon Area Calculator",
    description:
      "A high-performance Java desktop application that accurately computes the area of any polygon given its coordinate points. Built with Java Swing and AWT, it leverages geometric formulas for fast calculations within a clean, intuitive user interface.",
    subDescription: [
      "Developed interactive algorithm visualizations with animated sorting and searching demonstrations",
      "Created comprehensive practice problem sets with difficulty levels and detailed solutions",
      "Built a modern code playground for testing and running algorithms in real-time",
      "Implemented progress tracking system to monitor learning advancement",
    ],
    href: "https://github.com/JashanGoyal-85/Polygon-Area-Calculator",
    logo: "",
    image: "/assets/projects/poly.webp",
    tags: [
      { id: 1, name: "Java", path: "/assets/logos/react.svg" },
      { id: 2, name: "Java Swing", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Java AWT", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "OOM", path: "/assets/logos/nodeJs.svg" },
    ],
  },
  {
    id: 3,
    title: "Samadhaan - A Grievance Portal",
    description:
      "Samadhaan is a centralized platform featuring Complaint Registration, Geo-tagging, and Real-time Tracking. It enables citizens to report local issues with photos and GPS, while authorities use an Admin Dashboard and Data Analytics for Department-wise Routing, ensuring transparent communication and rapid resolution of civic problems.",
    subDescription: [
      "Developed a full-stack URL with React.js to create a responsive, high-performance web interface for both citizens and admins.",
      "Developed using Node.js to handle API requests and manage the logic for routing complaints to departments.",
      "Hosted on GCP using Cloud SQL for data and Cloud Storage for managing uploaded images and videos. And Integrated with Google Maps API for precise incident location and Firebase for secure user authentication.",
    ],
    href: "https://github.com/JashanGoyal-85/Samadhaan_Grievance-Portal",
    logo: "",
    image: "/assets/projects/Samadhaan.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "TypeScript", path: "/assets/logos/mongodb.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];
