
import CountryCard from "../components/CountryCard";
import Layout from "../components/Layout";


function Favorites({ favorites = [], toggleFavorite, isDark, setIsDark }) {
  return (
    <>
      <Layout isDark={isDark} setIsDark={setIsDark} >

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
            {favorites.map((country, index) => {
              const countryName =
                country.name?.common || country.name || "Unknown";

              return (
                <CountryCard
                  key={`${countryName}-${index}`}
                  country={country}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
                
                
              );
            })}
          </div>
        )}
      </div>
      </Layout>
    </>
  );
}

export default Favorites;