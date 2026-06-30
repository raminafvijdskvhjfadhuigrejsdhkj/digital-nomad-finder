import { useState } from "react";

function useCountryFilters(countries, search, setSearch, region, setRegion) {
  const [budget, setBudget] = useState("");
  const [internet, setInternet] = useState("");
  const [safety, setSafety] = useState("");
  const [climate, setClimate] = useState("");
  const [visaFriendly, setVisaFriendly] = useState(false);

  const clearFilters = () => {
    setSearch("");
    setRegion("");
    setBudget("");
    setInternet("");
    setSafety("");
    setClimate("");
    setVisaFriendly(false);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name?.common || country.name || "";

    const matchesSearch = countryName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region ? country.region === region : true;

    const matchesBudget =
      budget === ""
        ? true
        : budget === "low"
        ? country.cost < 1500
        : budget === "mid"
        ? country.cost >= 1500 && country.cost <= 3000
        : country.cost > 3000;

    const matchesInternet =
      internet === ""
        ? true
        : internet === "slow"
        ? country.internet < 50
        : internet === "good"
        ? country.internet >= 50 && country.internet < 150
        : country.internet >= 150;

    const matchesSafety = safety === "" ? true : country.safety === safety;
    const matchesClimate = climate === "" ? true : country.climate === climate;
    const matchesVisa = !visaFriendly ? true : country.visaFriendly === true;

    return (
      matchesSearch &&
      matchesRegion &&
      matchesBudget &&
      matchesInternet &&
      matchesSafety &&
      matchesClimate &&
      matchesVisa
    );
  });

  return {
    budget,
    setBudget,
    internet,
    setInternet,
    safety,
    setSafety,
    climate,
    setClimate,
    visaFriendly,
    setVisaFriendly,
    clearFilters,
    filteredCountries,
  };
}

export default useCountryFilters;