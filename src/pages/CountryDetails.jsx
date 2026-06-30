import { useParams } from "react-router-dom";
import styled from "styled-components";

import { countries as countriesData } from "../data/countries";

import CountryReview from "../components/CountryReview";
import Layout from "../components/Layout";
import CountryHero from "../components/CountryHero";
import CountryArticle from "../components/CountryArticle";
import CountryVerdict from "../components/CountryVerdict";
import CountryClimate from "../components/CountryClimate";
import useWeather from "../hooks/useWeather";
import useCountryImage from "../hooks/useCountryImage";

const Page = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  background:
    radial-gradient(circle at 50% 18%, rgba(26, 26, 46, 0.45), transparent 28%),
    ${({ theme }) => theme.background};
`;

const Main = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 70px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 80px;
`;

const NotFound = styled.section`
  min-height: 60vh;
  padding: 160px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: clamp(36px, 6vw, 72px);
  }
`;

function CountryDetails({ isDark, setIsDark, favorites = [], toggleFavorite }) {
  const { name } = useParams();
  

  const country = countriesData.find((item) => {
    const countryName = item.name?.common || item.name || "";
    return countryName.toLowerCase().replaceAll(" ", "-") === name;
  });

  const countryName = country?.name?.common || country?.name || "Unknown";

  const capital = Array.isArray(country?.capital)
    ? country.capital[0]
    : country?.capital || "N/A";

  const weather = useWeather(capital);
  const heroImage = useCountryImage(capital);

  const flag = country?.flags?.png || country?.flag || "";

  const isFavorite = favorites.some((item) => {
    const itemName = item.name?.common || item.name || "";
    return itemName === countryName;
  });

  if (!country) {
    return (
      <Layout isDark={isDark} setIsDark={setIsDark}>
        <Page>
          <NotFound>
            <h1>Country not found</h1>
          </NotFound>
        </Page>
      </Layout>
    );
  }

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <Page>
        <CountryHero
          heroImage={heroImage}
          country={country}
          countryName={countryName}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />

        <Main>
          <CountryArticle
            country={country}
            countryName={countryName}
            capital={capital}
          />

          <CountryVerdict
            country={country}
            capital={capital}
            weather={weather}
            flag={flag}
            countryName={countryName}
          />
        </Main>

        <ReviewSection>
          <CountryReview countryName={countryName} />
        </ReviewSection>

        <CountryClimate country={country} capital={capital} weather={weather} />
      </Page>
    </Layout>
  );
}

export default CountryDetails;