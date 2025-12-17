import { profile } from "console";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1 h-full",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    // tech stack lists used by the BentoGridItem when id === 3
    leftLists: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "TailwindCSS",
      "Git And GitHub",
    ],
    rightLists: ["C++", "C", "Python", "Java", "Javascript", "TypeScript"],
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Secure Vault",
    des: "A comprehensive security solution featuring a user dashboard and browser extension. Implements robust AES encryption for stored credentials and supports auto-fill functionality. Includes dedicated sections for Wi-Fi passwords and credit cards, plus a secure random password generator.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "CodeForces",
    img: "/code-forces.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CodeChef",
    img: "/cc.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "LeetCode",
    img: "/leetcode.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CodeForces",
    desc: "Contributed to the full-stack development lifecycle of web applications, focusing on the seamless integration of MongoDB, Express.js, React.js, and Node.js to deliver robust, scalable solutions.",
    className: "md:col-span-2",
    thumbnail: "/code-forces.svg",
    profileUrl: "https://codeforces.com/profile/permanentnight",
    rating: "1664 (Expert)",
    idName: "permanentnight",
  },
  {
    id: 2,
    title: "CodeChef",
    desc: "Engineered and deployed a RESTful API using Node.js and Express.js, meticulously handling data models with MongoDB and Mongoose to ensure optimal performance and security.",
    className: "md:col-span-2",
    thumbnail: "/CodeChef_Logo.svg.png",
    profileUrl: "https://www.codechef.com/users/piccacu",
    rating: "2006 (5Star)",
    idName : "piccacu",
  },
  {
    id: 3,
    title: "LeetCode",
    desc: "Spearheaded the end-to-end development of a client-facing web application, leveraging the MERN stack to deliver a high-performance, responsive, and intuitive user experience from concept to production.",
    className: "md:col-span-2",
    thumbnail: "/leetcode.svg",
    profileUrl: "https://leetcode.com/u/itachirijo/",
    rating: "1976 (Knight)",
    idName: "itachirijo",
  },
];

export const education = [
  {
    id: 1,
    school: "Indian Institute Of Information Technology, Allahabad",
    degree: "Bachelor of Technology 2024-2028",
    field: "Information Technology",
    year: "Current CGPA: 8.63/10",
    description:
      "Pursuing degree with focus on software engineering and full-stack development.",
    // logo path (place your file at public/iiita.jpg)
    logo: "/IIITAllahabad.jpg",
    // legacy icon left for compatibility; not used when `logo` is present
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JashanGoyal-85",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/jashangoyal85?t=U8uWgUI8RsCEbqER8HcUfA&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jashan-goyal-9946a9313?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];
