import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import styled from "styled-components";

const ReviewBox = styled.div`
  margin-top: 30px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  padding: 24px;
`;

const ReviewTitle = styled.h3`
  margin-bottom: 20px;
`;

const RatingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

function CountryReview({ countryName, updateCountryRating }) {
  const [review, setReview] = useState(() => {
    const saved = localStorage.getItem(`review-${countryName}`);

    return saved
      ? JSON.parse(saved)
      : {
          safety: 0,
          cost: 0,
          internet: 0,
          lifestyle: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem(`review-${countryName}`, JSON.stringify(review));

    const values = Object.values(review);
    const average =
      values.reduce((sum, value) => sum + value, 0) / values.length;

    updateCountryRating(countryName, average);
  }, [review, countryName, updateCountryRating]);

  const handleChange = (name, value) => {
    if (value === null) return;

    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ReviewBox>
      <ReviewTitle>Rate this country</ReviewTitle>

      <RatingRow>
        <span>Safety</span>
        <Rating
          value={review.safety}
          precision={0.5}
          onChange={(e, value) => handleChange("safety", value)}
        />
      </RatingRow>

      <RatingRow>
        <span>Cost</span>
        <Rating
          value={review.cost}
          precision={0.5}
          onChange={(e, value) => handleChange("cost", value)}
        />
      </RatingRow>

      <RatingRow>
        <span>Internet</span>
        <Rating
          value={review.internet}
          precision={0.5}
          onChange={(e, value) => handleChange("internet", value)}
        />
      </RatingRow>

      <RatingRow>
        <span>Lifestyle</span>
        <Rating
          value={review.lifestyle}
          precision={0.5}
          onChange={(e, value) => handleChange("lifestyle", value)}
        />
      </RatingRow>
    </ReviewBox>
  );
}

export default CountryReview;