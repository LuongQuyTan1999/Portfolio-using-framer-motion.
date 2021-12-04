import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { lightTheme } from "./Themes";
import { ReactComponent as Develope } from "../assets/svg/laptop-code-solid.svg";
import { ReactComponent as Design } from "../assets/svg/palette-solid.svg";
import LogoComponent from "../components/LogoComponent";
import SocicalIcons from "../components/SocicalIcons";
import PowerButton from "../components/PowerButton";
import ParticleComponent from "../components/ParticleComponent";
import BigTitle from "../components/BigTitle";

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${(props) => props.theme.body};
`;

const Main = styled.div`
  width: 30vw;
  height: 60vh;

  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  line-height: 1;
  font-family: "Ubuntu Mono", monospace;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
    list-style: disc;
    list-style-position: inside;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <LogoComponent theme="light" />
        <SocicalIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} />
            Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <nav>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul>
            </nav>
          </Description>
          <Description>
            <strong>Tools</strong>
            <nav>
              <ul>
                <li>Figma</li>
              </ul>
            </nav>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Frontend development
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="90%" left="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
