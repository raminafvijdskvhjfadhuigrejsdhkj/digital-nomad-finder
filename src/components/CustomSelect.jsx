import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 46px;
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
  display: inline-block;
  transition: transform 0.25s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;


const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;

  background: #1a1d29; /* НЕ transparent */
  backdrop-filter: none;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  overflow: hidden;

  z-index: 99999;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
`;

const Option = styled.button`
  width: 100%;
  padding: 12px 14px;
  background: ${({ $active }) =>
    $active ? "rgba(173, 198, 255, 0.14)" : "transparent"};
  border: none;
  color: ${({ theme }) => theme.text};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(173, 198, 255, 0.12);
  }
`;

function CustomSelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedLabel =
    options.find((option) => option.value === value)?.label || options[0].label;

  const handleSelect = (newValue) => {
    onChange(newValue);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <SelectButton type="button" onClick={() => setOpen((prev) => !prev)}>
        {selectedLabel}
        <Arrow $open={open}>⌄</Arrow>
      </SelectButton>

      {open && (
        <Dropdown>
          {options.map((option) => (
            <Option
              key={option.label}
              type="button"
              $active={option.value === value}
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

export default CustomSelect;