// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 30px;
  background-color: #4c576b;

  @media (max-width: 992px) {
      padding: 10px;
  }
`;

export const InputNameBox = styled.div`
  input {
    font-family: 'NotoSans800', sans-serif;
    font-size: 30px;
    color: #e8e5e4;
    margin-bottom: 5px;
    background-color: #384052;
  }
`;

export const InputPositionBox = styled.div`
  input {
    color: #b0b1bb;
    text-transform: uppercase;
    margin-bottom: 10px;
    background-color: #384052;
  }
`;

export const InputOverviewBox = styled.div`
  textarea {
    font-size: 14px;
    color: #c7c9d3;
    margin-bottom: 10px;
    height: 80px;
    background-color: #384052;
  }
`;
