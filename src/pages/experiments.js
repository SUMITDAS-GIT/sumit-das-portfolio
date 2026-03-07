import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import ScrambleText from "../components/ScrambleText";

// Styles
import "../styles/global.scss";
import "../styles/actions.scss";

const experimentsData = [
  {
    title: "MMStorage",
    description: "Cloud Storage Platform",
    url: "https://mmstorage.vercel.app",
  },
  {
    title: "Buy Me A Cup Of Tea",
    description: "Support & Donation Platform",
    url: "https://buymeacupoftea.lovable.app",
  },
  {
    title: "YouWay",
    description: "Your Way to Success",
    url: "https://youway.lovable.app",
  },
  {
    title: "Folk & Fam",
    description: "Cultural Platform",
    url: "https://folkandfam.vercel.app/",
  },
  {
    title: "Secure Vault",
    description: "Multi-Site Backend",
    url: "https://securevault-multi-site-backend.vercel.app/",
  },
];

const Experiments = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />

      <div className="actions">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header hideShortcut={true} goBackToHome={true} disableScramble={true} />
        <main>
          <Container>
            <ul className="actions-list md:pl-5">
              {experimentsData.map((experiment, index) => (
                <li key={index}>
                  <a
                    href={experiment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--tw-text-gray-primary)]"
                  >
                    <ScrambleText
                      text={experiment.title}
                      className="scramble-text inline-block"
                      duration={1 + index * 0.2}
                      placeholder=".:"
                    />
                    <span className="inline-block ml-5">
                      <ScrambleText
                        text={`(${experiment.description})`}
                        className="scramble-text"
                        duration={1.2 + index * 0.2}
                        placeholder="__"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </main>
        <br />
        <br />
        <br />
        <br />
        <Note />
      </div>
    </>
  );
};

export default Experiments;

export const Head = () => (
  <>
    <title>Sumit Das | Projects & Experiments | MMStorage, Folk & Fam, Secure Vault</title>
    <meta name="description" content="Explore Sumit Das's projects and experiments including MMStorage (Cloud Storage Platform), Folk & Fam (Cultural Platform), and Secure Vault (Multi-Site Backend)." />
    <meta name="keywords" content="Sumit Das, Projects, Experiments, MMStorage, Folk & Fam, Secure Vault, Cloud Storage, Cultural Platform, Multi-Site Backend" />
    <meta name="author" content="Sumit Das" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://sumitdas.com/experiments" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sumitdas.com/experiments" />
    <meta property="og:title" content="Sumit Das | Projects & Experiments" />
    <meta property="og:description" content="Explore innovative projects by Sumit Das including cloud storage platforms and cultural applications." />
    <meta property="og:image" content="https://sumitdas.com/home.png" />
    <meta property="og:image:alt" content="Sumit Das - Projects and Experiments" />
    <meta property="og:site_name" content="Sumit Das Portfolio" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://sumitdas.com/experiments" />
    <meta name="twitter:title" content="Sumit Das | Projects & Experiments" />
    <meta name="twitter:description" content="Explore innovative projects by Sumit Das including cloud storage platforms and cultural applications." />
    <meta name="twitter:image" content="https://sumitdas.com/home.png" />
    <meta name="twitter:image:alt" content="Sumit Das - Projects and Experiments" />
    <meta name="twitter:creator" content="@sumitdas08dec" />

    {/* Additional SEO Meta Tags */}
    <meta name="theme-color" content="#222222" />
    <meta name="msapplication-TileColor" content="#222222" />

    {/* Structured Data - Collection Page */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Sumit Das Projects & Experiments",
        "description": "A collection of innovative projects and experiments by Sumit Das including web applications and digital solutions.",
        "url": "https://sumitdas.com/experiments",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Projects",
          "numberOfItems": 5,
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "MMStorage",
              "description": "Cloud Storage Platform offering free 10 GB tier",
              "url": "https://mmstorage.vercel.app"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Folk & Fam",
              "description": "Cultural Platform for community engagement",
              "url": "https://folkandfam.vercel.app/"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Secure Vault",
              "description": "Multi-Site Backend solution",
              "url": "https://securevault-multi-site-backend.vercel.app/"
            }
          ]
        }
      })}
    </script>
  </>
);
