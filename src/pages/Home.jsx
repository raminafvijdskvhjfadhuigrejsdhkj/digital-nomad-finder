import styled from "styled-components";

import Navbar from "../components/Navbar";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";

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
  max-width: 1000px;
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 24px;
  align-items: end;

 

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;


const SearchButton = styled.button`
 width: 120px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background: #adc6ff;
  color: #002e6a;
  cursor: pointer;
  font-weight: 600;
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
const SearchField = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.text};
`;

const VisaSelect = styled.select`
  width: 100%;
  height: 42px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.text};
  outline: none;
  padding: 0 14px;
  `;



function Home({ countries, search, setSearch, region, setRegion, isDark, setIsDark, favorites, toggleFavorite }) {
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
        <RegionFilter region={region} setRegion={setRegion} />
</SearchField>

  <SearchField>
    <Label>Visa Type</Label>
 <VisaSelect>
      <option>Digital Nomad</option>
      <option>Tourist</option>
      <option>Work Visa</option>
    </VisaSelect>
  </SearchField>
  
    <SearchButton>Search</SearchButton>
</SearchPanel>
      </Hero>

      <Section>
        <SectionTitle>Recommended Destinations</SectionTitle>
        <SectionText>Top-rated locations based on internet, cost, and safety.</SectionText>

        <CountriesGrid>
          {countries.map((country) => (
            <CountryCard key={country.names?.common || country.name?.common}
             country={country}
             favorites={favorites}
             toggleFavorite={toggleFavorite} />
          ))}
        </CountriesGrid>
      </Section>
    </>
  );
}

export default Home;