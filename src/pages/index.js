import * as React from "react";

// Components
import Header from "../components/Header";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import SplitTextAnimation from "../components/SplitText";

// Styles
import "../styles/global.scss";
import "../styles/index.scss";

// Content
import { articles } from "../data/blog";
import Avatar from "../components/Avatar";
import { State } from "../components/Layout";
import ScrambleText from "../components/ScrambleText";

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const avatarRef = React.useRef(null);
  const { theme, onThemeChange } = React.useContext(State);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home overflow-hidden">
        <Loader isOpened={isOpened} duration={1} />
        <Header hideShortcut onThemeChange={onThemeChange} theme={theme} />
        <main className="overflow-hidden">
          <div className="avatar-section">
            <Avatar theme={theme} />
          </div>
          <div className="w-[90svw] banner-holder z-50 pt-[100px] sm:pointer-events-none fixed flex justify-center items-center">
            <h1 className="banner-title flex text-[var(--tw-text-gray-primary)] flex-col items-end h-full text-right font-bold w-[300px] flex-shrink-0">
              <ScrambleText
                text="Sumit"
                className="scramble-text min-w-[400px]"
                duration={3}
                placeholder="."
              />

              <ScrambleText
                text="Das"
                className="scramble-text min-w-[400px]"
                duration={3}
                placeholder="."
              />
            </h1>
            <span className="w-[420px]"> </span>
            <div className="banner-description w-[350px] mt-[0px] text-left 2xl:mt-[-30px] flex justify-end flex-col pl-[80px] items-start">
              <p className="mb-4 sm:mb-7">
                An{" "}
                <strong className="text-[var(--tw-text-gray-primary)] font-bold">
                  <ScrambleText
                    text="MBA Candidate & Full-Stack Developer"
                    className="scramble-text inline-block"
                    duration={2}
                    placeholder="."
                  />
                </strong>{" "}
                crafting data-driven digital solutions
              </p>
              <Shortcut text="to start" />
            </div>
          </div>

          <Link
            to="/blog"
            title="soon"
            className="blog-ticker-title  text-[var(--tw-text-gray-secondary)] fixed z-[100] left-[20px] sm:text-[18px] text-[14px]"
          >
            <ScrambleText
              text={`Latest posts ↓`}
              className="scramble-text"
              duration={2}
            />
          </Link>
          <p className="fixed z-[100] sm:text-[18px] text-right text-underline sm:bottom-[60px] text-[14px] right-[20px] text-[var(--tw-text-gray-secondary)] bottom-[65px]">
            <ScrambleText
              text={`Want to hire me?`}
              className="scramble-text"
              duration={2}
            />
            <a className="underline " href="mailto:linkme.das@gmail.com">
              <ScrambleText
                text={`linkme.das@gmail.com`}
                className="scramble-text"
                duration={2}
              />
            </a>
          </p>
          <div className="blog-ticker">
            <div className="blog-ticker-wrapper">
              {articles
                .flatMap((yearGroup) => yearGroup.posts)
                .filter((post) => post.active)
                .reverse()
                .map((post, index) => {
                  return (
                    <a
                      key={`${post.id}-${index}`}
                      href={post.link}
                      disabled={!post.active}
                      className={`blog-ticker-item relative text-[var(--tw-text-gray-secondary)] bg-[var(--bg-primary)] border-[1px] border-[var(--border-primary)] hover:border-[var(--border-primary)] ${
                        post.active
                          ? ""
                          : "-link-blocked cursor-not-allowed pointer-events-none"
                      }`}
                      title={post.active ? "Read now" : "Coming soon"}
                    >
                      <span className="emoji">{post.emoji}</span>
                      {!post.active ? (
                        <span className="absolute top-0 right-0 bg-white text-black px-2 py-1 font-bold text-xs">
                          soon
                        </span>
                      ) : null}
                      <h3>{post.title} -&gt;</h3>
                    </a>
                  );
                })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Sumit Das | MBA Candidate & Full-Stack Developer | Data-Driven Digital Solutions</title>
    <meta name="description" content="Sumit Das - MBA Candidate and Full-Stack Developer specializing in operations, MIS reporting, web design, and data analytics. Co-founder of MMStorage and Technologiya." />
    <meta name="keywords" content="Sumit Das, MBA Candidate, Full-Stack Developer, Data Analytics, Web Design, Operations, MIS Reporting, MMStorage, Technologiya, Indian Oil Corporation" />
    <meta name="author" content="Sumit Das" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="7 days" />
    <link rel="canonical" href="https://sumitdas.com" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sumitdas.com" />
    <meta property="og:title" content="Sumit Das | MBA Candidate & Full-Stack Developer" />
    <meta property="og:description" content="MBA Candidate and Full-Stack Developer crafting data-driven digital solutions. Co-founder of MMStorage and Technologiya." />
    <meta property="og:image" content="https://sumitdas.com/home.png" />
    <meta property="og:image:alt" content="Sumit Das - Professional Portfolio" />
    <meta property="og:site_name" content="Sumit Das Portfolio" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sumitdas.com" />
    <meta name="twitter:title" content="Sumit Das | MBA Candidate & Full-Stack Developer" />
    <meta name="twitter:description" content="MBA Candidate and Full-Stack Developer crafting data-driven digital solutions. Co-founder of MMStorage and Technologiya." />
    <meta name="twitter:image" content="https://sumitdas.com/home.png" />
    <meta name="twitter:image:alt" content="Sumit Das - Professional Portfolio" />
    <meta name="twitter:creator" content="@sumitdas08dec" />

    {/* Additional SEO Meta Tags */}
    <meta name="theme-color" content="#222222" />
    <meta name="msapplication-TileColor" content="#222222" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Security & Performance Meta Tags from HEAD repository */}
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://*; style-src 'self' 'unsafe-inline' https://*; img-src 'self' data: https://*; font-src 'self' https://*;" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="format-detection" content="telephone=no,email=no,address=no,date=no,url=no" />
    <meta name="google-site-verification" content="-UI2hElwcmQV0ZW4h6EBq_RSkP-oZ1ATuIlaUMw9trg" />

    {/* Additional Performance Meta Tags */}
    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <meta name="application-name" content="Sumit Das Portfolio" />

    {/* Structured Data - Person Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sumit Das",
        "jobTitle": "MBA Candidate & Full-Stack Developer",
        "description": "MBA Candidate with experience in operations, MIS reporting, web design, and data analytics. Co-founder of MMStorage and Technologiya.",
        "url": "https://sumitdas.com",
        "sameAs": [
          "https://www.linkedin.com/in/sumit-das-08dec2000/",
          "https://github.com/SUMITDAS-GIT"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Guwahati",
          "addressRegion": "Assam",
          "addressCountry": "India"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "MBA Program (Pursuing)"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Gauhati University"
          }
        ],
        "worksFor": [
          {
            "@type": "Organization",
            "name": "MMStorage",
            "url": "https://mmstorage.vercel.app"
          },
          {
            "@type": "Organization",
            "name": "Technologiya",
            "url": "https://technologiya.com"
          },
          {
            "@type": "Organization",
            "name": "Indian Oil Corporation Limited"
          }
        ],
        "knowsAbout": [
          "Data Analytics",
          "Web Design",
          "Operations Management",
          "MIS Reporting",
          "Full-Stack Development",
          "Supply Chain Management",
          "Digital Marketing",
          "Financial Analysis"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full-Stack Developer",
          "occupationLocation": {
            "@type": "City",
            "name": "Guwahati",
            "addressCountry": "India"
          }
        }
      })}
    </script>

    {/* Structured Data - Website Schema */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sumit Das Portfolio",
        "url": "https://sumitdas.com",
        "description": "Personal portfolio of Sumit Das - MBA Candidate and Full-Stack Developer",
        "author": {
          "@type": "Person",
          "name": "Sumit Das"
        },
        "publisher": {
          "@type": "Person",
          "name": "Sumit Das"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sumitdas.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
  </>
);
