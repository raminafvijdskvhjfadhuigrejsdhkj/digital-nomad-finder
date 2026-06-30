import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 42px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 0 14px;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.span`
  transition: transform 0.3s ease;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  overflow: hidden;
  z-index: 1000;
`;

const Option = styled.button`
  width: 100%;
  padding: 12px 14px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(173, 198, 255, 0.12);
  }
`;

function RegionFilter({ region, setRegion }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const options = [
    { value: "", label: "All Regions" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
    { value: "Africa", label: "Africa" },
    { value: "North America", label: "North America" },
    { value: "South America", label: "South America" },
    { value: "Oceania", label: "Oceania" },
  ];

  const selectedLabel =
    options.find((option) => option.value === region)?.label || "All Regions";

  function handleSelect(value) {
    setRegion(value);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <SelectButton type="button" onClick={() => setOpen(!open)}>
        {selectedLabel}
        <Arrow $open={open}>⌄</Arrow>
      </SelectButton>

      {open && (
        <Dropdown>
          {options.map((option) => (
            <Option
              key={option.label}
              type="button"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default RegionFilter;