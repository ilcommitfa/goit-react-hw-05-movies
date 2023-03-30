import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  height: 100%;
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