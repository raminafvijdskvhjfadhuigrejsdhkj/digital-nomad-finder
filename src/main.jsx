import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function Root() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <GlobalStyles />
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);