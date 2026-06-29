import styled from "styled-components";

const FooterWrapper = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 56px 24px 28px;
  background: ${({ theme }) => theme.background};
`;

const FooterGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  h3,
  h4 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text};
  }

  p,
  li {
    color: ${({ theme }) => theme.muted};
    font-size: 14px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <div>
          <h3>NomadPulse</h3>
          <p>Curating the world’s finest destinations for the global workforce.</p>
        </div>

        <div>
          <h4>Platform</h4>
          <ul>
            <li>Browse Cities</li>
            <li>Cost Calculator</li>
            <li>Nomad Visas</li>
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>Community Guidelines</li>
            <li>Contact Support</li>
            <li>Legal Docs</li>
          </ul>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Get monthly travel insights.</p>
        </div>
      </FooterGrid>
    </FooterWrapper>
  );
}

export default Footer;