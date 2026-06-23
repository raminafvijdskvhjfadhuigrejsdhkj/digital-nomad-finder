import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Nav = styled.nav`
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.muted};
  text-decoration: none;
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeButton = styled.button`
  width: 46px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: rotate(180deg);
    color: ${({ theme }) => theme.primary};
  }
`;

function Navbar({ isDark, setIsDark }) {
  return (
    <Nav>
      <Logo>
        Nomad<span>Pulse</span>
      </Logo>

      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/Countries">Countries</NavLink>
        <NavLink href="/Favorites">Favorites</NavLink>
      </NavLinks>

      <ThemeButton onClick={() => setIsDark(!isDark)}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeButton>
    </Nav>
  );
}

export default Navbar;