import styled from "styled-components";

const Button = styled.button`
  height: 46px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid
    ${({ $primary }) =>
      $primary ? "transparent" : "rgba(255,255,255,0.12)"};

  background: ${({ $primary, theme }) =>
    $primary ? theme.primary || "#adc6ff" : "rgba(255,255,255,0.04)"};

  color: ${({ $primary }) => ($primary ? "#002e6a" : "#e5e2e1")};
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export default Button;