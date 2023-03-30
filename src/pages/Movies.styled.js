import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  text-transform: uppercase;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 8px;
  border: 1px solid black;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 24px;
  height: 24px;
  &:hover {
    color: orangered;
  };
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;