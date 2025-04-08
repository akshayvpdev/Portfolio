export type SiteConfig = typeof siteConfig;

export const navItems = [
  { name: "Home", hash: "#hero" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Blog", hash: "#blog" },
  { name: "Docs", hash: "#docs" },
  { name: "Contact", hash: "#contact" },
];

export const siteConfig = {
  name: "John Doe | Portfolio",
  description: "Full Stack Developer specializing in modern web applications",
  navItems,
  socialLinks: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  metaData: {
    title: "John Doe - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    image: "/og-image.jpg",
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Web Developer",
      "Software Engineer",
      "Portfolio",
    ],
  },
  theme: {
    accentColor: "#8B5CF6", // Purple
    secondaryColor: "#3B82F6", // Blue
  },
} as const;
