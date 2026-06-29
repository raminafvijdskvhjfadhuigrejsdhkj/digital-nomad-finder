import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Inter, system-ui, sans-serif;
    background:
      radial-gradient(circle at 20% 10%, rgba(26, 26, 46, 0.35), transparent 35%),
      ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  button,
  input,
  select {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;