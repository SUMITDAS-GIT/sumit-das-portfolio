import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Files
import sumitdasCV from "../files/sumit-das-resume.pdf";

// Styles
import "../styles/global.scss";
import "../styles/actions.scss";
import ScrambleText from "../components/ScrambleText";

const Actions = () => {
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
              <li>
                <a
                  className="hover:text-[var(--tw-text-gray-primary)]"
                  href={sumitdasCV}
                  download={true}
                  target="_blank"
                >
                  <ScrambleText
                    text="Download CV"
                    className="scramble-text"
                    duration={1}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sumit-das-08dec2000/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Go to my Linkedin"
                    className="scramble-text"
                    duration={1.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Book a meeting"
                    className="scramble-text inline-block"
                    duration={1.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="invite to -> linkme.das@gmail.com"
                      className="scramble-text"
                      duration={1.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SUMITDAS-GIT/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="See my Github"
                    className="scramble-text"
                    duration={1.6}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/id__re_born?igsh=bnM0OHVkN2JjN2dn"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Follow on Instagram"
                    className="scramble-text"
                    duration={1.8}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="tel:+918812910655"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Call me"
                    className="scramble-text"
                    duration={2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:linkme.das@gmail.com"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Send me an e-mail"
                    className="scramble-text"
                    duration={2.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SUMITDAS-GIT/portfolio"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="View source code of this website"
                    className="scramble-text inline-block"
                    duration={2.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="(only devs)"
                      className="scramble-text"
                        duration={2.6}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
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

export default Actions;

export const Head = () => <title>Utilities | sumitdas</title>;
