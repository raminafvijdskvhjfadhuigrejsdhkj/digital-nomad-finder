import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout({ children, isDark, setIsDark }) {
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {children}

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Layout;