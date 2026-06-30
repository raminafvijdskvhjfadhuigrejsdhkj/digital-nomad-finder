import styled from "styled-components";
import GlassCard from "./ui/GlassCard";

const SideCard = styled(GlassCard)`
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

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌤️";
}

function CountryVerdict({ country, capital, weather, flag, countryName }) {
  return (
    <SideCard>
      <h3>Nomad Verdict</h3>

      <p>✅ Capital: {capital}</p>
      <p>✅ Region: {country.region || "N/A"}</p>
      <p>✅ Cost: ${country.cost || "N/A"} /mo</p>
      <p>✅ Internet: {country.internet || "N/A"} Mbps</p>
      <p>✅ Safety: {country.safety || "N/A"}</p>
      <p>✅ Climate: {country.climate || "N/A"}</p>

      <p>
        ✅ Visa: {country.visaFriendly ? "Visa Friendly" : "Visa Required"}
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
  );
}

export default CountryVerdict;