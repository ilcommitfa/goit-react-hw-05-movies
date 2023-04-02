import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  padding: 6px;
  margin-right: auto;
  color: #3f3f3f;
  border-radius: 4px;
  
  &:hover {
    color: white;
    background-color: orangered;
  };
`;

export const Movie = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: auto;
`;

export const Image = styled.img`
  display: block;
  width: 320px;
`;

export const Info = styled.div`
  padding: 0 15px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  padding: 0 15px 15px 15px;
  border: 1px solid #3f3f3f;
  border-width: 1px 0 1px 0;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;