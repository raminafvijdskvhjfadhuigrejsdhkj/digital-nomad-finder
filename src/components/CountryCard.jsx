import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CountryRating from "./CountryRating";
import GlassCard from "./ui/GlassCard";
import { getCountryName } from "../utils/getCountryName";


const CountryCardContainer = styled(GlassCard)`
  position: relative;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 430px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 10px 25px rgba(173, 198, 255, 0.15);
  }
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#ff4d6d" : "rgba(0,0,0,0.45)")};
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
`;

const RatingPlace = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 2;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  background: #111;
`;

const CountryName = styled.h3`
  font-size: 22px;
  margin-top: 8px;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(173, 198, 255, 0.1);
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
`;

const BottomBar = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-top: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;

function CountryCard({
  country,
  favorites = [],
  toggleFavorite,
  rating,
}) {
  const navigate = useNavigate();

  const countryName = getCountryName(country);

  const capital = Array.isArray(country.capital)
    ? country.capital[0]
    : country.capital || "N/A";

  const flag = country.flag || "";
  const countrySlug = countryName.toLowerCase().replaceAll(" ", "-");


  const isFavorite = favorites.some((item) => {
    const itemName = getCountryName(item);
    return itemName === countryName;
  });

  return (
    <CountryCardContainer onClick={() => navigate(`/country/${countrySlug}`)}>
      <FavoriteButton
        $active={isFavorite}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(country);
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </FavoriteButton>

      <RatingPlace>
        <CountryRating
          rating={rating}
          initialRatings={country.ratings || []}
        />
      </RatingPlace>

      <CardImage
        src={flag}
        alt={countryName}
      />

      <CountryName>{countryName}</CountryName>

      <Info>Capital: {capital}</Info>
      <Info>Region: {country.region || "N/A"}</Info>
      <Info>
        Population:{" "}
        {country.population
          ? Number(country.population).toLocaleString()
          : "N/A"}
      </Info>

      <Tags>
        <Tag>Safety: {country.safety || "N/A"}</Tag>
        <Tag>{country.climate || "N/A"}</Tag>
        <Tag>{country.visaFriendly ? "Visa Friendly" : "Visa Required"}</Tag>
      </Tags>

      <BottomBar>
        <span>{country.internet || "N/A"} Mbps</span>
        <span>${country.cost || "N/A"}/mo</span>
      </BottomBar>
    </CountryCardContainer>
  );
}

export default CountryCard;