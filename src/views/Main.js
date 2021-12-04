import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocicalIcons from "../components/SocicalIcons";
import { ReactComponent as YinYang } from "../assets/svg/yin-yang-solid.svg";
import Intro from "./Intro";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h4,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 3;
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 3;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;

  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;

  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;

  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);

  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};

  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;

  background: #000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [movePage, setMovePage] = useState({ x: "-100%" });

  const handleClick = () => setClick(!click);

  return (
    <MainContainer exit={{ ...movePage, transition: { duration: 0.5 } }}>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocicalIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
            onClick={() => handleClick()}
          />
          <span>Click here</span>
        </Center>

        <Contact
          to={{ pathname: "mailto: tanquyluong@gmail.com" }}
          target="_blank"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: "0.9" }}
          >
            Say hi...
          </motion.h2>
        </Contact>

        <Blog to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: "0.9" }}
            onClick={() => setMovePage({ x: "-100%" })}
          >
            Blog
          </motion.h2>
        </Blog>

        <Work to="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: "0.9" }}
            onClick={() => setMovePage({ x: "100%" })}
          >
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: "0.9" }}
              onClick={() => setMovePage({ y: "-100%" })}
            >
              About
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: "0.9" }}
              onClick={() => setMovePage({ y: "-100%" })}
            >
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>

      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
