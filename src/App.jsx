import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App({ isDark, setIsDark }) {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
 

  useEffect(() => {
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
      .catch((error) => console.log(error));
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.names.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" || country.region === region)
  );

  return (
    <Home
      countries={filteredCountries}
      search={search}
      setSearch={setSearch}
      region={region}
      setRegion={setRegion}
      isDark={isDark}
      setIsDark={setIsDark}
    />
  );
}

export default App;