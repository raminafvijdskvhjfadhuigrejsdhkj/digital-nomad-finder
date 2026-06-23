import styled from "styled-components";

const CountryCardContainer = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 360px;
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 10px 25px rgba(173, 198, 255, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
`;

const CountryName = styled.h3`
  font-size: 22px;
  margin-top: 8px;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
`;

const BottomBar = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

function CountryCard({ country }) {
  return (
    <CountryCardContainer>
      <CardImage src={country.image} alt={country.names?.common} />

      <CountryName>{country.names?.common || "Unknown country"}</CountryName>

      <Info>Capital: {country.capitals?.[0]?.name || "N/A"}</Info>
      <Info>Region: {country.region || "N/A"}</Info>
      <Info>Population: {country.population?.toLocaleString() || "N/A"}</Info>

      <BottomBar>
        <span>150 Mbps</span>
        <span>$2200/mo</span>
      </BottomBar>
    </CountryCardContainer>
  );
}

export default CountryCard;