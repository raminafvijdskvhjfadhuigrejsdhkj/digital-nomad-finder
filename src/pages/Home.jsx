import styled from "styled-components";

import Layout from "../components/Layout";
import CountryCard from "../components/CountryCard";
import FilterPanel from "../components/FilterPanel";
import useCountryFilters from "../hooks/useCountryFilters";
import { getCountryName } from "../utils/getCountryName";

const Hero = styled.section`
  min-height: 520px;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid rgba(173, 198, 255, 0.25);
  border-radius: 999px;
  color: #adc6ff;
  font-size: 13px;
  letter-spacing: 0.08em;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 18px;

  span {
    color: #adc6ff;
    font-style: italic;
  }
`;

const HeroText = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 17px;
  margin-bottom: 36px;
`;

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 24px 100px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 12px;
`;

const SectionText = styled.p`
  color: ${({ theme }) => theme.muted};
  margin-bottom: 32px;
`;

const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function Home({
  countries,
  isDark,
  setIsDark,
  favorites,
  toggleFavorite,
  ratings,
}) {
  const {
    search,
    setSearch,
    region,
    setRegion,
    budget,
    setBudget,
    internet,
    setInternet,
    safety,
    setSafety,
    climate,
    setClimate,
    visaFriendly,
    setVisaFriendly,
    clearFilters,
    filteredCountries,
  } = useCountryFilters(countries);

  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <Hero>
        <Badge>GLOBAL EXPLORATION</Badge>

        <HeroTitle>
          Find Your Next <span>Country</span>
        </HeroTitle>

        <HeroText>
          Explore the best countries for remote work, travel, and lifestyle.
        </HeroText>

        <FilterPanel
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          budget={budget}
          setBudget={setBudget}
          internet={internet}
          setInternet={setInternet}
          safety={safety}
          setSafety={setSafety}
          climate={climate}
          setClimate={setClimate}
          visaFriendly={visaFriendly}
          setVisaFriendly={setVisaFriendly}
          clearFilters={clearFilters}
        />
      </Hero>

      <Section>
        <SectionTitle>Recommended Destinations</SectionTitle>

        <SectionText>
          Showing {filteredCountries.length} destinations based on your filters.
        </SectionText>

        <CountriesGrid>
          {filteredCountries.map((country) => {
            const countryName = getCountryName(country);

            return (
              <CountryCard
                key={countryName}
                country={country}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                rating={ratings[countryName]}
              />
            );
          })}
        </CountriesGrid>
      </Section>
    </Layout>
  );
}

export default Home;