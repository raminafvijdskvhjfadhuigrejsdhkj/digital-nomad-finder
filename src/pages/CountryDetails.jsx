import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import { countries as countriesData } from "../data/countries";
import { getCountryImage } from "../api/images";
import CountryReview from "../components/CountryReview";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌤️";
}

const Page = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  background:
    radial-gradient(circle at 50% 18%, rgba(26, 26, 46, 0.45), transparent 28%),
    ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
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

const Badge = styled.span`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(173, 198, 255, 0.15);
  color: #adc6ff;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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

const Button = styled.button`
  height: 46px;
  padding: 0 26px;
  border-radius: 999px;
  border: 1px solid
    ${({ $primary }) => ($primary ? "transparent" : "rgba(255,255,255,0.12)")};
  background: ${({ $primary }) =>
    $primary ? "#adc6ff" : "rgba(255,255,255,0.04)"};
  color: ${({ $primary }) => ($primary ? "#002e6a" : "#e5e2e1")};
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ $primary }) =>
      $primary ? "0 12px 35px rgba(173, 198, 255, 0.2)" : "none"};
  }
`;

const Stats = styled(Glass)`
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

const MiniCard = styled(Glass)`
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

const SideCard = styled(Glass)`
  padding: 28px;
  border-radius: 28px;
  height: fit-content;

  h3 {
    margin-bottom: 22px;
  }

  p {
    color: ${({ theme }) => theme.muted};
    margin-bottom: 12px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 22px 0;
`;

const FlagImage = styled.img`
  width: 100%;
  border-radius: 24px;
  margin-top: 24px;
  object-fit: cover;
`;

const ReviewSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px 80px;
`;

const Climate = styled.section`
  background: ${({ theme }) => theme.background};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 80px 24px;
`;

const ClimateHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: clamp(30px, 4vw, 42px);
    letter-spacing: -0.03em;
  }

  p {
    color: ${({ theme }) => theme.muted};
    margin-top: 8px;
  }
`;

const ClimateGrid = styled.div`
  max-width: 1280px;
  margin: 32px auto 0;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ClimateCard = styled(Glass)`
  padding: 28px;
  border-radius: 28px;

  h4 {
    color: #adc6ff;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 28px;
    margin-top: 28px;
  }

  p {
    color: ${({ theme }) => theme.muted};
  }
`;

const WeatherRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
`;

const WeatherIcon = styled.span`
  font-size: 44px;
  line-height: 1;
`;



function CountryDetails({ isDark, setIsDark, favorites = [], toggleFavorite }) {
  const { name } = useParams();
  const [weather, setWeather] = useState(null);
  const [heroImage, setHeroImage] = useState("");

  const country = countriesData.find((item) => {
    const countryName = item.name?.common || item.name || "";
    return countryName.toLowerCase().replaceAll(" ", "-") === name;
  });

  const countryName = country?.name?.common || country?.name || "Unknown";

  const capital = Array.isArray(country?.capital)
    ? country.capital[0]
    : country?.capital || "N/A";

  const flag = country?.flags?.png || country?.flag || "";

  const isFavorite = favorites.some((item) => {
    const itemName = item.name?.common || item.name || "";
    return itemName === countryName;
  });

  useEffect(() => {
    async function fetchWeather() {
      if (!capital || capital === "N/A") return;

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${capital}&count=1`
        );

        const geoData = await geoRes.json();
        if (!geoData.results) return;

        const lat = geoData.results[0].latitude;
        const lon = geoData.results[0].longitude;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        const weatherData = await weatherRes.json();
        setWeather(weatherData.current_weather);
      } catch (error) {
        console.log("Weather error:", error);
      }
    }

    fetchWeather();
  }, [capital]);

  useEffect(() => {
    async function loadHeroImage() {
      if (!capital || capital === "N/A") return;

      const photo = await getCountryImage(`${capital} city skyline`);
      setHeroImage(photo);
    }

    loadHeroImage();
  }, [capital]);

  if (!country) {
    return (
      <>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Page>
          <Hero>
            <Container>
              <Title>Country not found</Title>
            </Container>
          </Hero>
        </Page>
      </>
    );
  }

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <Page>
        <Hero $image={heroImage}>
          <Container>
            <Badge>{country.region}</Badge>

            <TopRow>
              <div>
                <Title>{countryName}</Title>
                <Description>
                  Discover {countryName}, its capital city, population, climate,
                  and connectivity for remote work and travel.
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

        <Main>
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
              For digital nomads, {countryName} offers an estimated monthly cost
              of ${country.cost || "N/A"}, internet speed around{" "}
              {country.internet || "N/A"} Mbps, and a safety level marked as{" "}
              {country.safety || "N/A"}.
            </p>

            <p>
              The climate is usually considered {country.climate || "N/A"}, and
              visa status is shown as{" "}
              {country.visaFriendly ? "visa friendly" : "visa required"}.
            </p>

            <MiniCards>
              <MiniCard>
                <h3>Café Culture</h3>
                <p>
                  Good places for working, coffee, meetings and slow mornings.
                </p>
              </MiniCard>

              <MiniCard>
                <h3>Nightlife</h3>
                <p>Explore local evenings, food, city walks and social life.</p>
              </MiniCard>
            </MiniCards>
          </Article>

          <SideCard>
            <h3>Nomad Verdict</h3>

            <p>✅ Capital: {capital}</p>
            <p>✅ Region: {country.region || "N/A"}</p>
            <p>✅ Cost: ${country.cost || "N/A"} /mo</p>
            <p>✅ Internet: {country.internet || "N/A"} Mbps</p>
            <p>✅ Safety: {country.safety || "N/A"}</p>
            <p>✅ Climate: {country.climate || "N/A"}</p>
            <p>
              ✅ Visa:{" "}
              {country.visaFriendly ? "Visa Friendly" : "Visa Required"}
            </p>
            <p>
              ✅ Weather:{" "}
              {weather
                ? `${getWeatherIcon(weather.weathercode)} ${weather.temperature}°C in ${capital}`
                : "Loading..."}
            </p>

            <Divider />

            <p>⚠️ Check visa rules before travelling.</p>
            <p>⚠️ Weather is shown for the capital city.</p>

            <FlagImage src={flag} alt={countryName} />
          </SideCard>
        </Main>

        <ReviewSection>
          <CountryReview countryName={countryName} />
        </ReviewSection>

        <Climate>
          <ClimateHeader>
            <h2>Climate & Connectivity</h2>
            <p>Planning your seasonal arrival.</p>
          </ClimateHeader>

          <ClimateGrid>
            <ClimateCard>
              <h4>Current Weather</h4>

              <WeatherRow>
                <WeatherIcon>
                  {weather ? getWeatherIcon(weather.weathercode) : "🌤️"}
                </WeatherIcon>

                <div>
                  <h3>
                    {weather ? `${weather.temperature}°C` : "Loading..."}
                  </h3>
                  <p>Current weather in {capital}</p>
                </div>
              </WeatherRow>
            </ClimateCard>

            <ClimateCard>
              <h4>Internet</h4>
              <h3>{country.internet || "N/A"} Mbps</h3>
              <p>Estimated average internet speed for remote work.</p>
            </ClimateCard>

            <ClimateCard>
              <h4>Safety Level</h4>
              <h3>{country.safety || "N/A"}</h3>
              <p>Travel comfort indicator for digital nomads.</p>
            </ClimateCard>
          </ClimateGrid>
        </Climate>
      </Page>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default CountryDetails;