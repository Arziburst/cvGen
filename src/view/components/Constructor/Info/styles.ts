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
  margin-bottom: 10px;
  input {
    background-color: ${({ theme }) => theme.main.bg};
    height: 50px;
  }
  input, p {
    font-family: 'NotoSans800', sans-serif;
    font-size: 30px;
    color: ${({ theme }) => theme.main.colorSecond};
  }
`;

export const InputPositionBox = styled.div`
  margin-bottom: 10px;
  input {
    background-color: ${({ theme }) => theme.main.bg};
  } 
  input, p {
    color: ${({ theme }) => theme.main.colorSecond};
    text-transform: uppercase;
  }
`;

export const InputOverviewBox = styled.div`
  margin-bottom: 10px;
  textarea {
    background-color: ${({ theme }) => theme.main.bg};
  } 
  textarea, p {
    font-size: 14px;
    color: ${({ theme }) => theme.main.colorSecond};
  }
`;
