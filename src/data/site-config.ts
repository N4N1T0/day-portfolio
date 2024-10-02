export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  author: string;
  url: string;
};

const siteConfig: SiteConfig = {
  title: "Dayana Abuin Rios - Portfolio",
  subtitle: "Marketeer. Copywriter. Linguist. Tech Enthusiast.",
  description: "Welcome to my Portfolio - As Marketeer/Copywriter/Linguist",
  url: process.env.CI
    ? "https://www.dayanaabuinrios.marketing/"
    : "http://localhost:4321",
  image: {
    src: "/Dayana-Profile.jpg",
    alt: "Dayana Abuin Rios - Portfolio",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Download CV",
      href: "Dayana_Abuin_Rios_CV.pdf",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/info/about",
    },
    {
      text: "Contact",
      href: "/info/contact",
    },
  ],
  socialLinks: [
    {
      text: "Threads",
      href: "https://www.threads.net/@dayanaabuinrios",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dayana-abuin-rios",
    },
  ],
  hero: {
    title: "Hi There & Welcome to My Corner of the Web!",
    text: "I’m **Dayana**, a language technology specialist dedicated to harnessing my linguistic skills and localization expertise to strategize and create impactful marketing content. Currently, I am blending my experience in linguistics and interpretation with my technological knowledge at <a href='https://www.interprefy.com/' target='_blank'>Interprefy</a>, promoting our innovative platform and AI solutions. My approach combines intuition with strategic research, using aesthetics as a driving force for exceptional products. I have a deep passion for copywriting, visual design, and the principles of product-led growth. Feel free to explore some of my writing—I would love to hear your thoughts!",
    image: {
      src: "/Dayana-Profile.jpg",
      alt: "Dayana's Profile",
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to My Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
  author: "Adrian Alvarez Alonso",
};

export default siteConfig;
