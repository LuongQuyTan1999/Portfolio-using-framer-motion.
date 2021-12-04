import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { motion } from "framer-motion";

import { darkTheme } from "./Themes";
import LogoComponent from "../components/LogoComponent";
import SocicalIcons from "../components/SocicalIcons";
import PowerButton from "../components/PowerButton";
import ParticleComponent from "../components/ParticleComponent";
import BigTitle from "../components/BigTitle";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${(props) => props.theme.body};
`;

const float = keyframes`
  0% {
    transform: translateY(-10px)
  }
  50% {
    transform: translateY(15px) translateX(15px)
  }
  0% {
    transform: translateY(-10px)
  }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;

  width: 20vw;

  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  line-height: 1.5;
  backdrop-filter: blur(4px);
  font-size: calc(0.6rem + 1vw);
  font-family: "Ubuntu" monospace;
  font-style: italic;

  z-index: 3;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  width: 50vw;
  height: 40vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <LogoComponent theme="dark" />
        <SocicalIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br />
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
