// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  input {
    padding-right: 25px;
    background-color: ${({ theme }) => theme.accent.bgPrimary};
  }

  button {
    position: absolute;
    right: 0;
    border-radius: 0;
    height: 100%;
  }

  p, input {
    font-family: 'NotoSans500';
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.main.color};
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

