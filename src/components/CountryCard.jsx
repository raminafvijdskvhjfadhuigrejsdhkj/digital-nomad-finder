function CountryCard({ country }) {
  return (
    <div className="country-card">
      <h2>{country.flag?.emoji} {country.names?.common}</h2>

      <p>Capital: {country.capitals?.[0]?.name   || "N/A"}</p>
      <p>Region: {country.region || "N/A"}</p>
      <p>Population: {country.population?.toLocaleString() || "N/A"}</p>

      <button>View details</button>
      <button>Add to wishlist</button>
    </div>
  );
}

export default CountryCard;