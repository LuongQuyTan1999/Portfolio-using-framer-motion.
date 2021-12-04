import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { darkTheme } from "./Themes";
import LogoComponent from "../components/LogoComponent";
import SocicalIcons from "../components/SocicalIcons";
import PowerButton from "../components/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../components/Card";
import { ReactComponent as YinYang } from "../assets/svg/yin-yang-solid.svg";
import BigTitle from "../components/BigTitle";

const Box = styled(motion.div)`
  height: 400vh;

  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${(props) => props.theme.body};
`;

const Main = styled(motion.ul)`
  color: #ffffff;

  position: fixed;
  top: 20rem;
  left: calc(10rem + 15vw);

  height: 40vh;

  display: flex;
`;

const Rotate = styled(motion.span)`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;

  width: 80px;
  height: 80px;

  svg {
    path {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer-motion
const Container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <LogoComponent theme="dark" />
        <SocicalIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={Container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate
          ref={yinyang}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1,
            ease: "linear",
          }}
        >
          <YinYang width={80} height={80} />
        </Rotate>

        <BigTitle text="WORK" top="20%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
