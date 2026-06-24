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
    return country.names?.common || country.name?.common || "Unknown";
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

    fetch("https://api.restcountries.com/countries/v5", 
      {headers: {
        Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
      }},
    )
      .then((res) => res.json())
      .then((data) => {
        const countriesArray = Array.isArray(data)
          ? data
          : data.data?.objects || [];

        const countriesWithImages = countriesArray.map((country) => {
          const countryName =
            country.names?.common || country.name?.common || "country";

          return {
            ...country,
            image: `https://picsum.photos/seed/${countryName}/600/400`,
          };
        });
         console.log("Countries:", countriesWithImages);
         console.log("Length:", countriesWithImages.length);
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
      (region === "" || country.region === region)
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
        path="/favorites"
        element={
          <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
        }
      />
    </Routes>
  );
}

export default App;