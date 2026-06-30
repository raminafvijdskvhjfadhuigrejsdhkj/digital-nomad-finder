import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #111827; /* solid color */
  border-bottom: 1px solid #2a2a35;

  position: sticky;
  top: 0;
  z-index: 999999;
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  span {
    color: #adc6ff;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ThemeButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 20px;
`;

const Burger = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 18px;

    position: fixed;
    top: 72px;
    left: 0;
    right: 0;

    width: 100%;
    height: calc(100vh - 72px);
    padding: 22px 24px;

    background: ${({ theme }) => theme.background};
    border-top: 1px solid ${({ theme }) => theme.border};
    z-index: 99999;

    overflow-y: auto;

    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo to="/">
          Nomad<span>Pulse</span>
        </Logo>

        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/">Countries</Link>
          <Link to="/favorites">Favorites</Link>
        </NavLinks>

        <RightSide>
          <ThemeButton onClick={() => setIsDark(!isDark)}>
            {isDark ? "☀️" : "🌙"}
          </ThemeButton>

          <Burger onClick={() => setOpen(!open)}>
            {open ? "×" : "☰"}
          </Burger>
        </RightSide>
      </Nav>

      {open && (
        <MobileMenu>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            Countries
          </Link>
          <Link to="/favorites" onClick={() => setOpen(false)}>
            Favorites
          </Link>
        </MobileMenu>
      )}
    </>
  );
}

export default Navbar;