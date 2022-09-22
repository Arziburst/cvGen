// Core
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 30px;
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

export const InputIcon = styled(ReactSVG)`
  svg {
    fill: ${({ theme }) => theme.main.bg};
    width: 15px;
    height: 15px;
    margin-right: 5px;
    path {
      fill: ${({ theme }) => theme.main.bg};
      color: ${({ theme }) => theme.main.bg};
    }
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  align-items: center;

  input {
    font-family: 'NotoSans500';
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.main.color};
    background-color: ${({ theme }) => theme.accent.bgPrimary};
  }
`;
