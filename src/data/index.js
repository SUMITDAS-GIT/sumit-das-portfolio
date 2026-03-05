import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import sumitdasCV from "../files/sumit-das-resume.pdf";

const bioDescription = `MBA Candidate with 4+ years of experience in operations, MIS reporting, web design, and data analytics.
I've delivered 25–40 responsive web projects with 20–35% higher user engagement; optimized financial reporting efficiency by 20%
and created 10+ interactive dashboards at Indian Oil Corporation. Specializing in Supply Chain & Operations, Digital Marketing,
Advanced Data Analytics, and Financial Analysis. Co-founded two tech ventures: MMStorage (cloud storage platform) and Technologiya (technology services).
Passionate about solving real-world problems through data-driven insights, strategic thinking, and innovative digital solutions.`;

const careerPath = [
  {
    role: "Founder",
    details: `Technologiya | Guwahati, Assam, India | Feb 2026 -> Present`,
  },
  {
    role: "Co-Founder & Website Maintainer",
    details: `MMStorage (Cloud Storage Platform) | Remote | Feb 2026 -> Present`,
  },
  {
    role: "Admin Assistant",
    details: `Vantage Info | Guwahati, India | 2025 -> 2026`,
  },
  {
    role: "Freelance Web Designer",
    details: `Self-Employed | Remote | Jan 2022 -> Present`,
  },
  {
    role: "Internship – ERP/SAP Process Support",
    details: `Kaapro Management Solutions Pvt Ltd | Guwahati, India | Mar 2025 -> Sep 2025`,
  },
  {
    role: "Advanced Data Analytics Consultant",
    details: `Ms. Basanti Store | Guwahati, India | Apr 2024 -> Present`,
  },
  {
    role: "Account Assistant",
    details: `Indian Oil Corporation Limited | Bamunimaidan, Guwahati, India | Mar 2024 -> Mar 2025`,
  },
  {
    role: "Independent Financial Records & Reporting",
    details: `Freelance / Independent | Remote | Jan 2023 -> Dec 2023`,
  },
];

const academyPath = [
  {
    role: "Master of Business Administration (MBA) – Dual Specialization",
    details: `Logistics, Material & Supply Chain Management | Digital Marketing | Currently Pursuing (Feb 2026)`,
  },
  {
    role: "Bachelor of Commerce (Hons)",
    details: `Gauhati University | Guwahati, Assam, India | 2019 -> 2022 | CGPA: 8.05`,
  },
  {
    role: "Post Graduate Diploma in Computer Applications (PGDCA)",
    details: `Assam | 2019 | Grade: A`,
  },
  {
    role: "Higher Secondary (XII) – AHSEC | Commerce Stream",
    details: `Guwahati, Assam, India | 2019 | 70.60%`,
  },
  {
    role: "Matriculation (X) – CBSE",
    details: `South Point School, Guwahati | 2017 | CGPA: 7.8`,
  },
  {
    role: "Diploma in Fine Arts and Crafts",
    details: `Assam Fine Arts and Crafts Society | 2005 -> 2015`,
  },
];

const openSourcePath = [
  {
    role: "My Github",
    link: `https://github.com/SUMITDAS-GIT`,
  },
];

const volunteeringPath = [
  {
    role: "SEBI Investor Certification",
    details: `Stock Valuation & Index Funds | 2024-2025`,
    description: `- Obtained certification in financial investments and stock market analysis`,
  },
];
const ProjectsPath = [
  {
    role: "Technologiya",
    details: `Technology Service Brand | Feb 2026 -> Present`,
    description: `-> Modern technology service platform delivering device, computer, and digital solutions with custom pricing models`,
    link: `https://technologiya.com/`,
  },
  {
    role: "MMStorage",
    details: `Cloud Storage Platform | Feb 2026 -> Present`,
    description: `-> Co-founded cloud storage platform offering free 10 GB tier with intuitive digital interface and seamless UX`,
    link: `https://mmstorage.vercel.app/`,
  },
  {
    role: "Personal AI Assistant – Jarvis",
    details: `Google Gemini API Project | 2025`,
    description: `-> Built personal AI assistant using Google Gemini API with NLP for task automation and information retrieval`,
    link: `https://github.com/SUMITDAS-GIT`,
  },
];

const quickActionList = [
  {
    text: "Copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://sumitdas.com",
  },
  {
    text: "Download CV",
    nick: "d",
    icon: <FiDownload />,
    target: sumitdasCV,
  },
  {
    text: "Know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/sumit-das-08dec2000/",
  },
  {
    text: "See my github",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/SUMITDAS-GIT/",
  },
  {
    text: "Send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:linkme.das@gmail.com",
  },
  {
    text: "Call me",
    nick: "p",
    icon: <FiCalendar />,
    target: "tel:+918812910655",
  },
  {
    text: "View source code",
    nick: "s",
    icon: <FiCoffee />,
    target: "https://github.com/SUMITDAS-GIT/portfolio",
  },
];

export {
  bioDescription,
  careerPath,
  academyPath,
  quickActionList,
  openSourcePath,
  volunteeringPath,
  ProjectsPath,
};
