// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;

  input {
    font-family: 'NotoSans500';
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.main.color};
    background-color: ${({ theme }) => theme.accent.bgPrimary};
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h3 {
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

