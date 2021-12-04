import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { ReactComponent as Github } from "../assets/svg/github-brands.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter-brands.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook-brands.svg";
import { ReactComponent as YouTube } from "../assets/svg/youtube-brands.svg";
import { darkTheme } from "../views/Themes";

const Icons = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  ul > li > a > svg > path {
    fill: ${(props) =>
      props.color === "dark" ? darkTheme.text : darkTheme.body};
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocicalIcons = ({ theme }) => {
  return (
    <Icons color={theme}>
      <ul>
        <motion.li
          initial={{ transform: "scale:0" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://github.com/luongquytan1999" }}
          >
            <Github width={25} height={25} />
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ transform: "scale:0" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://twitter.com/LngQuTn1" }}
          >
            <Twitter width={25} height={25} />
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ transform: "scale:0" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://www.facebook.com/luongquytan1999" }}
          >
            <Facebook width={25} height={25} />
          </NavLink>
        </motion.li>
        <motion.li
          initial={{ transform: "scale:0" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <NavLink
            style={{ color: "inherit" }}
            target="_blank"
            to={{ pathname: "https://github.com/luongquytan1999" }}
          >
            <YouTube width={25} height={25} />
          </NavLink>
        </motion.li>
      </ul>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
        color={theme}
      />
    </Icons>
  );
};

export default SocicalIcons;
