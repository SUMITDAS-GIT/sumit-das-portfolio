import * as React from "react";
import classNames from "classnames";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
import sumitdasCV from "../files/sumit-das-resume.pdf";
import sumitdasPhoto from "../files/sumit-das-photo.jpg";

// Context
import { State } from "../components/Layout";

// Data
import {
  bioDescription,
  careerPath,
  academyPath,
  openSourcePath,
  volunteeringPath,
  ProjectsPath,
} from "../data";

// Images
import headshot from "../images/headshot.jpg";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";
import Headshot from "../components/Headshot";

const panelMap = (index) => {
  const map = {
    0: (
      <ol className="career-path">
        <br />
        <div className="border-l-2 border-[var(--border-secondary)] pl-4">
          Check out my{" "}
          <a
            className="underline text-[var(--tw-text-gray-primary)] font-bold"
            href="https://www.linkedin.com/in/sumit-das-08dec2000/"
          >
            LinkedIn experience section
          </a>{" "}
          for more details
        </div>
        {careerPath.map(({ role, details, description }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ol>
    ),
    1: (
      <ol className="career-path -academic">
        {academyPath.map(({ role, details }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
            </li>
          );
        })}
      </ol>
    ),
    2: (
      <ol className="career-path -academic">
        {openSourcePath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
    3: (
      <ol className="career-path -academic">
        {volunteeringPath.map(({ role, details, description }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
            </li>
          );
        })}
      </ol>
    ),
    4: (
      <ol className="career-path -academic">
        {ProjectsPath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
  };

  return map[index];
};

const About = () => {
  const [activePanel, setActivePanel] = React.useState(0);
  const { setCopied } = React.useContext(State);

  const copyText = () => {
    navigator.clipboard.writeText(bioDescription).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }, console.log);
  };

  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1440 : true;

  return (
    <>
      <Cursor />

      <div className="about">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main>
          <div className="headshot column">
            {isMobile ? <img src={headshot} alt="headshot" /> : <Headshot />}

            <a
              className="button -download -icon"
              href={sumitdasPhoto}
              download="Sumit-Das-Professional-Photo.jpg"
            >
              <FiDownload />
              <p>Download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title mb-2 font-bold text-[18px]">Bio</h3>
            <p className="paragraph">
              MBA Candidate with 4+ years of experience in operations, MIS reporting, web design, and data analytics.
              I've delivered 25–40 responsive web projects with 20–35% higher user engagement; optimized financial reporting efficiency by 20%
              and created 10+ interactive dashboards at Indian Oil Corporation. Specializing in Supply Chain & Operations, Digital Marketing,
              Advanced Data Analytics, and Financial Analysis.
            </p>
            <p className="paragraph">
              Co-founded two tech ventures: MMStorage (cloud storage platform) and Technologiya (technology services).
              Passionate about solving real-world problems through data-driven insights, strategic thinking, and innovative digital solutions.
            </p>
            <ul className="control">
              <li>
                <button className="-icon" onClick={copyText}>
                  <FiCopy />
                  <p>Copy bio</p>
                </button>
              </li>
              <li>
                <a className="button -icon" href={sumitdasCV} download={true}>
                  <FiDownload />
                  <p>Download CV</p>
                </a>
              </li>
            </ul>
            <div className="toggle">
              {[
                {
                  title: "Career",
                  isBlocked: false,
                },
                {
                  title: "Academy",
                  isBlocked: false,
                },
                {
                  title: "Open source",
                  isBlocked: false,
                },
                {
                  title: "Volunteering",
                  isBlocked: false,
                },
                {
                  title: "Projects",
                  isBlocked: false,
                },
              ].map(({ title, isBlocked }, index) => {
                return (
                  <button
                    className={classNames("-toggle", {
                      "--active font-bold": activePanel === index,
                      "-button-blocked": isBlocked,
                    })}
                    disabled={isBlocked}
                    title={isBlocked ? `soon` : title}
                    onClick={() => setActivePanel(index)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            {panelMap(activePanel)}
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;

export const Head = () => (
  <>
    <title>Sumit Das | About | MBA Candidate & Full-Stack Developer Experience</title>
    <meta name="description" content="Learn about Sumit Das - MBA Candidate with 4+ years experience in operations, MIS reporting, web design, and data analytics. Co-founder of MMStorage and Technologiya." />
    <meta name="keywords" content="Sumit Das, About, MBA Candidate, Full-Stack Developer, Experience, Career, Education, Skills, MMStorage, Technologiya" />
    <meta name="author" content="Sumit Das" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://sumitdas.com/about" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="https://sumitdas.com/about" />
    <meta property="og:title" content="Sumit Das | About | MBA Candidate & Full-Stack Developer" />
    <meta property="og:description" content="Learn about Sumit Das - MBA Candidate with experience in operations, MIS reporting, web design, and data analytics." />
    <meta property="og:image" content="https://sumitdas.com/home.png" />
    <meta property="og:image:alt" content="Sumit Das - Professional About Page" />
    <meta property="og:site_name" content="Sumit Das Portfolio" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sumitdas.com/about" />
    <meta name="twitter:title" content="Sumit Das | About | MBA Candidate & Full-Stack Developer" />
    <meta name="twitter:description" content="Learn about Sumit Das - MBA Candidate with experience in operations, MIS reporting, web design, and data analytics." />
    <meta name="twitter:image" content="https://sumitdas.com/home.png" />
    <meta name="twitter:image:alt" content="Sumit Das - Professional About Page" />
    <meta name="twitter:creator" content="@sumitdas08dec" />

    {/* Additional SEO Meta Tags */}
    <meta name="theme-color" content="#222222" />
    <meta name="msapplication-TileColor" content="#222222" />

    {/* Security & Performance Meta Tags from HEAD repository */}
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://*; style-src 'self' 'unsafe-inline' https://*; img-src 'self' data: https://*; font-src 'self' https://*;" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="format-detection" content="telephone=no,email=no,address=no,date=no,url=no" />
    <meta name="google-site-verification" content="your-google-verification-code-here" />

    {/* Additional Performance Meta Tags */}
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <meta name="application-name" content="Sumit Das Portfolio" />

    {/* Structured Data - About Page */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sumit Das",
        "description": "Learn about Sumit Das - MBA Candidate and Full-Stack Developer with experience in operations, MIS reporting, web design, and data analytics.",
        "url": "https://sumitdas.com/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Sumit Das",
          "jobTitle": "MBA Candidate & Full-Stack Developer",
          "description": "MBA Candidate with 4+ years of experience in operations, MIS reporting, web design, and data analytics."
        }
      })}
    </script>
  </>
);
