// Core
import styled from 'styled-components';

export const Container = styled.section`
`;

export const List = styled.ul`
`;


export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const RemoveBtn = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50%;
  border: none;
  &::before {
    content: '-'
  }
`;
