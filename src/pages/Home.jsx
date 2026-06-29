import { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import CustomSelect from "../components/CustomSelect";

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

const SearchPanel = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  align-items: end;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.text};
`;

const VisaLabel = styled.label`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClearButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(173, 198, 255, 0.1);
  }
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
  search,
  setSearch,
  region,
  setRegion,
  isDark,
  setIsDark,
  favorites,
  toggleFavorite,
}) {
  const [budget, setBudget] = useState("");
  const [internet, setInternet] = useState("");
  const [safety, setSafety] = useState("");
  const [climate, setClimate] = useState("");
  const [visaFriendly, setVisaFriendly] = useState(false);

  const clearFilters = () => {
    setSearch("");
    setRegion("");
    setBudget("");
    setInternet("");
    setSafety("");
    setClimate("");
    setVisaFriendly(false);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.common || country.name || "";

    const matchesSearch = countryName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region ? country.region === region : true;

    const matchesBudget =
      budget === ""
        ? true
        : budget === "low"
        ? country.cost < 1500
        : budget === "mid"
        ? country.cost >= 1500 && country.cost <= 3000
        : country.cost > 3000;

    const matchesInternet =
      internet === ""
        ? true
        : internet === "slow"
        ? country.internet < 50
        : internet === "good"
        ? country.internet >= 50 && country.internet < 150
        : country.internet >= 150;

    const matchesSafety = safety === "" ? true : country.safety === safety;
    const matchesClimate = climate === "" ? true : country.climate === climate;
    const matchesVisa = !visaFriendly ? true : country.visaFriendly === true;

    return (
      matchesSearch &&
      matchesRegion &&
      matchesBudget &&
      matchesInternet &&
      matchesSafety &&
      matchesClimate &&
      matchesVisa
    );
  });

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <Hero>
        <Badge>GLOBAL EXPLORATION</Badge>

        <HeroTitle>
          Find Your Next <span>Country</span>
        </HeroTitle>

        <HeroText>
          Explore the best countries for remote work, travel, and lifestyle.
        </HeroText>

        <SearchPanel>
          <SearchField>
            <Label>Search Destination</Label>
            <SearchBar search={search} setSearch={setSearch} />
          </SearchField>

          <SearchField>
            <Label>Region</Label>
            <CustomSelect
              value={region}
              onChange={setRegion}
              options={[
                { value: "", label: "All Regions" },
                { value: "Europe", label: "Europe" },
                { value: "Asia", label: "Asia" },
                { value: "Africa", label: "Africa" },
                { value: "North America", label: "North America" },
                { value: "South America", label: "South America" },
                { value: "Oceania", label: "Oceania" },
              ]}
            />
          </SearchField>

          <SearchField>
            <Label>Budget</Label>
            <CustomSelect
              value={budget}
              onChange={setBudget}
              options={[
                { value: "", label: "All Budgets" },
                { value: "low", label: "Under $1500" },
                { value: "mid", label: "$1500 - $3000" },
                { value: "high", label: "$3000+" },
              ]}
            />
          </SearchField>

          <SearchField>
            <Label>Internet Speed</Label>
            <CustomSelect
              value={internet}
              onChange={setInternet}
              options={[
                { value: "", label: "All Speeds" },
                { value: "slow", label: "Under 50 Mbps" },
                { value: "good", label: "50 - 150 Mbps" },
                { value: "fast", label: "150+ Mbps" },
              ]}
            />
          </SearchField>

          <SearchField>
            <Label>Safety</Label>
            <CustomSelect
              value={safety}
              onChange={setSafety}
              options={[
                { value: "", label: "All Safety" },
                { value: "Low", label: "Low" },
                { value: "Medium", label: "Medium" },
                { value: "High", label: "High" },
                { value: "Very High", label: "Very High" },
              ]}
            />
          </SearchField>

          <SearchField>
            <Label>Climate</Label>
            <CustomSelect
              value={climate}
              onChange={setClimate}
              options={[
                { value: "", label: "All Climates" },
                { value: "Warm", label: "Warm" },
                { value: "Tropical", label: "Tropical" },
                { value: "Mild", label: "Mild" },
                { value: "Cold", label: "Cold" },
              ]}
            />
          </SearchField>

          <SearchField>
            <Label>Visa</Label>
            <VisaLabel>
              <input
                type="checkbox"
                checked={visaFriendly}
                onChange={(e) => setVisaFriendly(e.target.checked)}
              />
              Visa Friendly
            </VisaLabel>
          </SearchField>

          <SearchField>
            <Label>Actions</Label>
            <ClearButton type="button" onClick={clearFilters}>
              Clear Filters
            </ClearButton>
          </SearchField>
        </SearchPanel>
      </Hero>

      <Section>
        <SectionTitle>Recommended Destinations</SectionTitle>
        <SectionText>
          Showing {filteredCountries.length} destinations based on your filters.
        </SectionText>

        <CountriesGrid>
          {filteredCountries.map((country, index) => {
            const countryName = country.name?.common || country.name || "Unknown";

            return (
              <CountryCard
                key={`${countryName}-${index}`}
                country={country}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            );
          })}
        </CountriesGrid>
      </Section>
    </>
  );
}

export default Home;