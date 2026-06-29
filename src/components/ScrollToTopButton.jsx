import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 54px;
  height: 54px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  z-index: 999;

  background: rgba(173, 198, 255, 0.18);
  color: white;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(173, 198, 255, 0.3);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    right: 16px;
    bottom: 16px;
  }
`;

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return <Button onClick={scrollToTop}>↑</Button>;
}

export default ScrollToTopButton;