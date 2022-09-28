// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.main.bgSecond};

  @media (max-width: 992px) {
      padding: 10px;
  }
`;

export const InputNameBox = styled.div`
  input {
    font-family: 'NotoSans800', sans-serif;
    font-size: 30px;
    color: ${({ theme }) => theme.main.colorSecond};
    margin-bottom: 5px;
    height: 50px;
    background-color: ${({ theme }) => theme.main.bg};
  }
`;

export const InputPositionBox = styled.div`
  input {
    color: ${({ theme }) => theme.main.colorSecond};
    text-transform: uppercase;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.main.bg};
  }
`;

export const InputOverviewBox = styled.div`
  textarea {
    font-size: 14px;
    color: ${({ theme }) => theme.main.colorSecond};
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.main.bg};
  }
`;
