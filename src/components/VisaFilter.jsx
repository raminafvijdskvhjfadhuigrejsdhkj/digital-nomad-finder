import { useState } from "react";
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
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

function VisaFilter() {
  const [open, setOpen] = useState(false);
  const [visa, setVisa] = useState("Digital Nomad");

  const options = ["Digital Nomad", "Tourist", "Work Visa"];

  function handleSelect(value) {
    setVisa(value);
    setOpen(false);
  }

  return (
    <Wrapper>
      <SelectButton type="button" onClick={() => setOpen(!open)}>
        {visa}
        <span>⌄</span>
      </SelectButton>

      {open && (
        <Dropdown>
          {options.map((option) => (
            <Option key={option} type="button" onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default VisaFilter;