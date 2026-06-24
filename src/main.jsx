import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

function Root() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("DarkMode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <GlobalStyles />
        <App isDark={isDark} setIsDark={setIsDark} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);