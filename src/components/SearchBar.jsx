import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 42px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  outline: none;
  padding: 0 14px;

  &::placeholder {
    color: #8c909f;
  }
`;


function SearchBar({ search, setSearch }) {
    return (
       <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Country name..."
    />
    );
}

export default SearchBar;