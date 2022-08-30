import styled from 'styled-components';

export const ListImage = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 40px 10px 10px 10px;
  justify-content: center;
`;

export const ItemImage = styled.li`
  display: flex;
  justify-content: center;
  width: calc((100% - 30px) / 4);
`;
