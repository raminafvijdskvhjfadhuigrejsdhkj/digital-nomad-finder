import styled from "styled-components";

import SearchBar from "./SearchBar";
import CustomSelect from "./CustomSelect";

import {
  REGION_OPTIONS,
  BUDGET_OPTIONS,
  INTERNET_OPTIONS,
  SAFETY_OPTIONS,
  CLIMATE_OPTIONS,
} from "../data/filterOptions";

const Panel = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  align-items: end;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.text};
`;

const CheckboxLabel = styled.label`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClearButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: rgba(173, 198, 255, 0.1);
  }
`;

function FilterPanel({
  search,
  setSearch,
  region,
  setRegion,
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
}) {
  const selectFilters = [
    {
      label: "Region",
      value: region,
      onChange: setRegion,
      options: REGION_OPTIONS,
    },
    {
      label: "Budget",
      value: budget,
      onChange: setBudget,
      options: BUDGET_OPTIONS,
    },
    {
      label: "Internet Speed",
      value: internet,
      onChange: setInternet,
      options: INTERNET_OPTIONS,
    },
    {
      label: "Safety",
      value: safety,
      onChange: setSafety,
      options: SAFETY_OPTIONS,
    },
    {
      label: "Climate",
      value: climate,
      onChange: setClimate,
      options: CLIMATE_OPTIONS,
    },
  ];

  return (
    <Panel>
      <Field>
        <Label>Search Destination</Label>
        <SearchBar search={search} setSearch={setSearch} />
      </Field>

      {selectFilters.map((filter) => (
        <Field key={filter.label}>
          <Label>{filter.label}</Label>

          <CustomSelect
            value={filter.value}
            onChange={filter.onChange}
            options={filter.options}
          />
        </Field>
      ))}

      <Field>
        <Label>Visa</Label>
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={visaFriendly}
            onChange={(e) => setVisaFriendly(e.target.checked)}
          />
          Visa Friendly
        </CheckboxLabel>
      </Field>

      <Field>
        <Label>Actions</Label>
        <ClearButton type="button" onClick={clearFilters}>
          Clear Filters
        </ClearButton>
      </Field>
    </Panel>
  );
}

export default FilterPanel;