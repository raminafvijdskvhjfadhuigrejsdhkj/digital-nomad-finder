import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Loading from "./pages/Loading";

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

  function getCountryName(country) {
    return country.name?.common || country.country || "Unknown";
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

  useEffect(() => {
    const slowTimer = setTimeout(() => {
      setShowSlowLoading(true);
    }, 2000);

    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        const countriesArray = data.data || [];

        const countriesWithImages = countriesArray.map((country) => {
          const countryName = country.country || "country";

          return {
            name: {
              common: countryName,
            },
            capital: country.cities?.[0] || "N/A",
            region: "All",
            population: "N/A",
            image: `https://picsum.photos/seed/${countryName}/600/400`,
          };
        });

        setCountries(countriesWithImages);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      })
      .finally(() => {
        clearTimeout(slowTimer);
        setLoading(false);
        setShowSlowLoading(false);
      });

    return () => clearTimeout(slowTimer);
  }, []);

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
        path="/favorites"
        element={
          <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
        }
      />
    </Routes>
  );
}

export default App;