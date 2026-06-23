import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import  RegionFilter  from "./components/RegionFilter";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://api.restcountries.com/countries/v5?limit=99", {
      headers: {
        Authorization: "Bearer rc_live_2a7c920a16f444e794f018ef8399666a",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data.data.objects);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.names.common.toLowerCase().includes(search.toLowerCase()) && (region === "" || country.region === region)
  );

  return (
    <>
      <Navbar />
      <RegionFilter region={region} setRegion={setRegion} />
      <div className="container">
        <h1>Find your next country</h1>
        <p>Explore countries for remote work and travel</p>
        <SearchBar search={search} setSearch={setSearch} />
        
        <div className="countries-grid">
          {filteredCountries.map((country) => (
            <CountryCard key={country.names.common} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;