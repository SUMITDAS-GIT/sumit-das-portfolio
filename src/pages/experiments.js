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
    url: "https://mmstorage.lovable.app",
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

export const Head = () => <title>Experiments | sumitdas</title>;
