import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)``;

const Box = styled(motion.NavLink)`
  width: calc(10rem + 15vw);
  height: 30rem;

  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  z-index: 5;

  transition: all 0.3 ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  padding: 0.5rem 0;
  padding-top: 1rem;

  color: inherit;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Karla", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    color: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem 0;
`;

const Date = styled.div`
  padding: 0.5rem 0;
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = ({ blog }) => {
  const { name, tags, date, imgSrc, link } = blog;

  return (
    <Container variants={Item}>
      <Box to={{ pathname: link }} target="_blank">
        <Image img={imgSrc} alt="Img" />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => (
            <Tag key={id}>#{t}</Tag>
          ))}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
