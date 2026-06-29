

import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";

const RatingBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.6);
  padding: 6px 10px;
  border-radius: 999px;
`;

const RatingNumber = styled.span`
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

function CountryRating({ countryName, initialRatings = [] }) {
  const savedRatings = JSON.parse(
    localStorage.getItem(`ratings-${countryName}`)
  );

  const [ratings] = useState(savedRatings || initialRatings);

  const average =
    ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 0;

  return (
    <RatingBadge>
      <StarIcon sx={{ color: "#facc15", fontSize: 15 }} />
      <RatingNumber>{average.toFixed(1)}</RatingNumber>
    </RatingBadge>
  );
}

export default CountryRating;