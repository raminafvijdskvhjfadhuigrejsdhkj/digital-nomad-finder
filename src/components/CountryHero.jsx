import styled from "styled-components";

import Button from "./ui/Button";
import Badge from "./ui/Badge";
import GlassCard from "./ui/GlassCard";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Hero = styled.section`
  min-height: 720px;
  padding: 430px 24px 32px;
  background:
    linear-gradient(to bottom, rgba(5, 5, 5, 0.15), #050505 78%),
    url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: clamp(42px, 7vw, 76px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 18px 0 14px;
`;

const Description = styled.p`
  max-width: 640px;
  color: ${({ theme }) => theme.muted};
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const Stats = styled(GlassCard)`
  margin-top: 26px;
  padding: 22px;
  border-radius: 28px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.muted};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
  }

  div {
    margin-top: 12px;
    height: 4px;
    border-radius: 999px;
    background: #adc6ff;
    box-shadow: 0 0 18px rgba(173, 198, 255, 0.35);
  }
`;

function CountryHero({
  heroImage,
  country,
  countryName,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <Hero $image={heroImage}>
      <Container>
        <Badge>{country.region}</Badge>

        <TopRow>
          <div>
            <Title>{countryName}</Title>
            <Description>
              Discover {countryName}, its capital city, population, climate, and
              connectivity for remote work and travel.
            </Description>
          </div>

          <Actions>
            <Button
              $primary
              onClick={() => toggleFavorite && toggleFavorite(country)}
            >
              {isFavorite ? "♥ Added" : "♡ Add to Favorites"}
            </Button>

            <Button type="button">Share</Button>
          </Actions>
        </TopRow>

        <Stats>
          <Stat>
            <p>Cost of Living</p>
            <h3>${country.cost || "N/A"} /mo</h3>
            <div />
          </Stat>

          <Stat>
            <p>Internet Speed</p>
            <h3>{country.internet || "N/A"} Mbps</h3>
            <div />
          </Stat>

          <Stat>
            <p>Safety</p>
            <h3>{country.safety || "N/A"}</h3>
            <div />
          </Stat>

          <Stat>
            <p>Climate</p>
            <h3>{country.climate || "N/A"}</h3>
            <div />
          </Stat>
        </Stats>
      </Container>
    </Hero>
  );
}

export default CountryHero;