import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Loading from "./pages/Loading";
import CountryDetails from "./pages/CountryDetails";
import { countries as countriesData } from "./data/countries";

function App({ isDark, setIsDark }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [showSlowLoading, setShowSlowLoading] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const slowTimer = setTimeout(() => {
      setShowSlowLoading(true);
    }, 2000);

    setCountries(countriesData);
    setLoading(false);
    setShowSlowLoading(false);

    return () => clearTimeout(slowTimer);
  }, []);

  function getCountryName(country) {
    return country.name?.common || country.name || "Unknown";
  }

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

  const filteredCountries = countries.filter((country) => {
    const countryName = getCountryName(country);

    return (
      countryName.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || region === "All" || country.region === region)
    );
  });

  if (loading && showSlowLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            countries={filteredCountries}
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
            isDark={isDark}
            setIsDark={setIsDark}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        }
      />

      <Route
        path="/countries"
        element={
          <Home
            countries={filteredCountries}
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
            isDark={isDark}
            setIsDark={setIsDark}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
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
          />
        }
      />
    </Routes>
  );
}

export default App;