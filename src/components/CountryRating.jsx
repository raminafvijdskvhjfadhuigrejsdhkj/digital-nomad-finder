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

function CountryRating({ rating, initialRatings = [] }) {
  const average =
    rating ??
    (initialRatings.length > 0
      ? initialRatings.reduce((sum, r) => sum + r, 0) / initialRatings.length
      : 0);

  return (
    <RatingBadge>
      <StarIcon sx={{ color: "#facc15", fontSize: 15 }} />
      <RatingNumber>{average.toFixed(1)}</RatingNumber>
    </RatingBadge>
  );
}

export default CountryRating;