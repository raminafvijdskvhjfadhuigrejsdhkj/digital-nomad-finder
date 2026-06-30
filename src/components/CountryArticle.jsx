import styled from "styled-components";
import GlassCard from "./ui/GlassCard";

const Article = styled.div`
  h2 {
    font-size: clamp(30px, 4vw, 42px);
    line-height: 1.15;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  p {
    color: ${({ theme }) => theme.muted};
    line-height: 1.8;
    margin-bottom: 18px;
  }
`;

const MiniCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const MiniCard = styled(GlassCard)`
  padding: 24px;
  border-radius: 24px;

  h3 {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;

function CountryArticle({ country, countryName, capital }) {
  return (
    <Article>
      <h2>A Digital Nomad Destination</h2>

      <p>
        {countryName} is located in {country.region}. Its capital city is{" "}
        {capital}, and the population is{" "}
        {country.population
          ? Number(country.population).toLocaleString()
          : "N/A"}{" "}
        people.
      </p>

      <p>
        For digital nomads, {countryName} offers an estimated monthly cost of $
        {country.cost || "N/A"}, internet speed around{" "}
        {country.internet || "N/A"} Mbps, and a safety level marked as{" "}
        {country.safety || "N/A"}.
      </p>

      <p>
        The climate is usually considered {country.climate || "N/A"}, and visa
        status is shown as{" "}
        {country.visaFriendly ? "visa friendly" : "visa required"}.
      </p>

      <MiniCards>
        <MiniCard>
          <h3>Café Culture</h3>
          <p>Good places for working, coffee, meetings and slow mornings.</p>
        </MiniCard>

        <MiniCard>
          <h3>Nightlife</h3>
          <p>Explore local evenings, food, city walks and social life.</p>
        </MiniCard>
      </MiniCards>
    </Article>
  );
}

export default CountryArticle;