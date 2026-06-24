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

  function toggleFavorite(country) {
    const exists = favorites.some(
      (item) => item.names.common === country.names.common
    );

    if (exists) {
      setFavorites(
        favorites.filter((item) => item.names.common !== country.names.common)
      );
    } else {
      setFavorites([...favorites, country]);
    }
  }

  useEffect(() => {
    const slowTimer = setTimeout(() => {
      setShowSlowLoading(true);
    }, 2000);

    fetch("https://api.restcountries.com/countries/v5?limit=100", {
      headers: {
        Authorization: "Bearer rc_live_2a7c920a16f444e794f018ef8399666a",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const countriesWithImages = data.data.objects.map((country) => ({
          ...country,
          image: `https://picsum.photos/seed/${country.names.common}/600/400`,
        }));

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

  const filteredCountries = countries.filter(
    (country) =>
      country.names.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
  );

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
        path="/favorites"
        element={
          <Favorites
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        }
      />
    </Routes>
  );
}

export default App;