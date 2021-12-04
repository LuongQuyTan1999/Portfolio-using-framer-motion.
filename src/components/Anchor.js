import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as Link } from "../assets/svg/link-solid.svg";
import { ReactComponent as Anchor } from "../assets/svg/anchor-solid.svg";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: translateY(-50%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = ({ numbers }) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(numbers)].map((x, id) => (
          <Link key={id} width={25} height={25} className="chain" />
        ))}
        <Anchor width={70} height={70} />
      </Slider>
    </Container>
  );
};
export default AnchorComponent;
