import CountryCard from "../components/CountryCard";

function Favorites({ favorites, toggleFavorite }) {
  return (
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
          {favorites.map((country) => (
            <CountryCard
              key={country.names.common}
              country={country}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;