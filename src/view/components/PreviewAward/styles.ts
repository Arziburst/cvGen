// Core
import styled from 'styled-components';

export const Container = styled.section`
`;

export const Wrapper = styled.div`
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

export const List = styled.ul`
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const ReceivedText = styled.div`
  margin-bottom: 3px;
  input {
     font-family: 'NotoSans500';
     font-weight: 500;
     font-size: 14px;
     color: #4c576b;
     background-color: #cbb8ad;
  }
`;

export const DateText = styled.div`
  margin-bottom: 3px;
  input {
     color: #4c576b;
     font-size: 14px;
     background-color: #cbb8ad;
  }
`;

export const LocationText = styled.div`
  input {
     color: #4c576b;
     font-size: 14px;
     background-color: #cbb8ad;
  }
`;
