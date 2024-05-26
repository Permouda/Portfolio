import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `En tant que développeur full-stack passionné et récemment diplômé en ingénierie informatique avec une spécialisation MIAGE, j'excelle dans la création d'applications web robustes et évolutives. Maîtrisant les technologies frontales telles que Next.js, React.js, Tailwind CSS, et Three.js pour le développement web 3D, ainsi que les technologies back-end telles que Node.js et MongoDB, je vise à tirer parti de mes compétences pour créer des solutions innovantes qui stimulent la croissance de l'entreprise et offrent des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Avant de me lancer dans le développement, j'étais un designer graphique passionné, maniant Adobe Photoshop avec dextérité. J'ai eu l'opportunité de collaborer avec plusieurs artistes marocains en tant que directeur artistique pour la conception de leurs singles et albums. Mon expertise s'étend également à la création de chartes graphiques pour les entreprises et toutes sortes de créations visuelles. Parallèlement, je nourris une passion pour la production musicale, le mixage et le mastering, domaines dans lesquels j'ai pu exprimer mon sens artistique.`;

export const EXPERIENCES = [
  {
    year: "Fev 2023 - Present",
    role: "Full Stack developer",
    company: "Freelance",
    description: `En tant que freelance, j'ai développé une application web innovante combinant l'édition de documents et la création de diagrammes en temps réel, avec une fonctionnalité de partage et de travail collaboratif. Ce projet m'a permis d'explorer de nouvelles approches pour améliorer la productivité et la collaboration en ligne. Actuellement, je travaille sur une plateforme de streaming dédiée aux créateurs de contenu, offrant des fonctionnalités telles que le chat en direct, la gestion des bannissements, l'intégration avec OBS Studio pour un streaming fluide, ainsi que d'autres outils spécifiques à ce domaine. Ce projet me permet de repousser les limites de l'expérience de streaming et d'offrir une solution complète aux créateurs.`,
    technologies: ["Nextjs", "Reactjs", "Threejs" ],
  },
  {
    year: "Oct 2023 - Jan 2024",
    role: "Graphic Designer",
    company: "ADL Studio",
    description: `Chez ADL STUDIO, société de post-production audio pour le cinéma, ma mission était de renforcer leur identité visuelle. J'ai conçu leur communication sur les réseaux sociaux avec une touche cinématographique, créé des supports visuels pour les shootings et l'étalonnage, ainsi que des flyers promotionnels incarnant leur univers.`,
    technologies: ["Photoshop", "Illustrator", "Shotting"],
  },
  {
    year: "Juin 2023 - Sep 2023",
    role: "Fullstack Developer",
    company: "Digimperial",
    description: `Mon projet de fin d'études chez DIGIMPERIAL portait sur le développement d'une plateforme novatrice pour la gestion de liens personnalisés et l'intégration de profils dans des cartes NFC sous forme de Smart Business Cards. En utilisant Next.js, Node.js, TypeScript, Tailwind CSS, Express.js et JWT, j'ai conçu une solution complète alliant une interface web attrayante à une technologie de pointe avec les cartes NFC NTAG215. Cette plateforme permet une présentation professionnelle innovante et facilite l'échange d'informations.`,
    technologies: ["Nextjs", "Tailwindcss", "Mongodb", "ExpressJs", "NTAG215"],
  },
  {
    year: "Avr 2023 - Juin 2023",
    role: "Front End Developer",
    company: "Digimperial",
    description: `Au sein de DIGIMPERIAL, mon premier projet consistait à développer le front-end d'une plateforme dédiée à la gestion de tournois de gaming. En utilisant Vue.js, TypeScript et Bootstrap, j'ai conçu une interface utilisateur conviviale et réactive. De plus, j'ai assuré la communication avec l'API back-end via un SDK, garantissant ainsi une intégration fluide entre les différentes composantes de l'application.`,
    technologies: ["Vuejs", "Typescript", "Bootstrap"],
  },
  
];

export const PROJECTS = [
  {
    title: "SABA | Working On",
    image: project5,
    description:
      "Une plateforme de streaming complète avec fonctionnalités de chat en direct, gestion des bannissements, intégration OBS Studio, système d'authentification et d'abonnement pour les créateurs.",
    technologies: ["Next.js", "Clerk", "Tailwindcss", "Prisma", "LiveKit"],
    link:"https://www.figma.com/design/ljKYsBcZkVq5d9ZgRnBxfi/SABA?t=fsfXnygoCmxDEWtf-0",
  },
  {
    title: "MindWeave",
    image: project1,
    description:
      "Une application collaborative permettant l'édition de documents, la création de diagrammes, le partage et le travail d'équipe en temps réel, avec système d'authentification des utilisateurs.",
    technologies: ["Next.js", "Kinde", "Convex", "Moment.js", "Editor.js", "Excalidraw"],
    link:"https://www.figma.com/design/OFFSRAuTNz4JUKjMPBg56y/MINDWEAVE?t=zkNSltojCabHhCx9-0",
  },
  {
    title: "NVSBL Preview",
    image: project2,
    description:
      "Un site web vitrine mettant en avant la solution Smart Business Cards, avec présentation détaillée du concept, des fonctionnalités et démonstration.",
    technologies: ["Three.js", "GSAP", "ASScroll", "Vite"],
    link:"https://github.com/Permouda/nvsbl-demo",
  },
  {
    title: "NVSBL",
    image: project4,
    description:
      "Une solution innovante permettant la création de cartes de visite numériques avec intégration de profils sur des cartes NFC et gestion des liens personnalisés.",
    technologies: ["Next.js", "Tailwindcss", "Nodejs", "Mongoose", "Expressjs","JWT"],
    link:"https://www.figma.com/design/giO9SyD8yzwER3qqU3TL2V/NVSBL-Connect?t=FIwbz8M0AgOU5WbH-0",
  },
  {
    title: "E-foot",
    image: project3,
    description:
      "Une plateforme entièrement fonctionnelle pour la gestion de tournois de gaming, avec des fonctionnalités telles que la gestion des équipes, des joueurs, un système de bracketage, le suivi des scores et des résultats.",
    technologies: ["Vuejs", "Typescript", "Bootstrap"],
    link:"https://www.figma.com/design/LlQ9fEWNKS3jZba3vLmBYG/Tournament-Screenshoots?t=Ax63fQ23CFAorEPH-0",
  },
];

export const CONTACT = {
  address: "Casablanca, Morocco ",
  phoneNo: "+212 601 923 452 ",
  email: "elhaddaji.iliass@gmail.com",
};
