import CountryCard from "../components/CountryCard";
import Layout from "../components/Layout";
import { getCountryName } from "../utils/getCountryName";

function Favorites({
  favorites = [],
  toggleFavorite,
  isDark,
  setIsDark,
  ratings = {},
}) {
  return (
    <Layout isDark={isDark} setIsDark={setIsDark}>
      <div style={{ padding: "40px" }}>
        <h1>My Favorite Countries</h1>

        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {favorites.map((country) => {
              const countryName = getCountryName(country);

              return (
                <CountryCard
                  key={countryName}
                  country={country}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  rating={ratings[countryName]}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Favorites;