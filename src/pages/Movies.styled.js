import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';

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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  width: calc((100% - 40px)/5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  cursor: zoom-in;
  }
`;

export const LinkButton = styled(Link)`
  display: block;
  margin-right: auto;
  color: #3f3f3f;
  text-decoration: none;
  :hover {
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
`;

export const Rating = styled.p`
  font-size: 14px;
`;