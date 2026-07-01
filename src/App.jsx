import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CountryDetails from "./pages/CountryDetails";
import { countries as countriesData } from "./data/countries";
import { getCountryName } from "./utils/getCountryName";

function App({ isDark, setIsDark }) {
  const [countries, setCountries] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [ratings, setRatings] = useState(() => {
    const savedRatings = localStorage.getItem("ratings");
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  function toggleFavorite(country) {
    const countryName = getCountryName(country);

    const exists = favorites.some(
      (item) => getCountryName(item) === countryName
    );

    if (exists) {
      setFavorites(
        favorites.filter((item) => getCountryName(item) !== countryName)
      );
    } else {
      setFavorites([...favorites, country]);
    }
  }

  function updateCountryRating(countryName, average) {
    setRatings((prev) => ({
      ...prev,
      [countryName]: average,
    }));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            countries={countries}
            isDark={isDark}
            setIsDark={setIsDark}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            ratings={ratings}
          />
        }
      />

      <Route
        path="/countries"
        element={
          <Home
            countries={countries}
            isDark={isDark}
            setIsDark={setIsDark}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            ratings={ratings}
          />
        }
      />

      <Route
        path="/country/:name"
        element={
          <CountryDetails
            isDark={isDark}
            setIsDark={setIsDark}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            ratings={ratings}
            updateCountryRating={updateCountryRating}
          />
        }
      />

      <Route
        path="/favorites"
        element={
          <Favorites
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            isDark={isDark}
            setIsDark={setIsDark}
            ratings={ratings}
          />
        }
      />
    </Routes>
  );
}

export default App;