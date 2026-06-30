import styled from "styled-components";
import GlassCard from "./ui/GlassCard";

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌤️";
}

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

const ClimateCard = styled(GlassCard)`
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

function CountryClimate({ country, capital, weather }) {
  return (
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
              <h3>{weather ? `${weather.temperature}°C` : "Loading..."}</h3>
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
  );
}

export default CountryClimate;