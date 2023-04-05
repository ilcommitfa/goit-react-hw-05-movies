import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 200px;
`;

export const Image = styled.img`
  display: block;
  width: 180px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 14px;
  color: grey;
`;