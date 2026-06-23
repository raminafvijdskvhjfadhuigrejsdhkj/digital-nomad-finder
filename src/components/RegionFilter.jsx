import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  height: 42px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  outline: none;
  padding: 0 14px;

  option {
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }
`;



function RegionFilter({ region, setRegion }) {
  return (
    <Select value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
}

export default RegionFilter;