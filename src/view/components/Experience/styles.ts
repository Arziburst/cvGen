// Core
import styled from 'styled-components';

export const Container = styled.section`
`;

export const Inner = styled.div`
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  input {
    font-family: 'NotoSans800';
    font-weight: 800;
    font-size: 17px;
    color: #4c576b;
    width: 45%;
    background-color: #e7e7e7;
  }
`;

export const Location = styled.div`
  margin-bottom: 8px;
  input {
      font-family: 'NotoSans800';
      font-weight: 800;
      font-size: 14px;
      color: #4c576b;
      width: 45%;
      background-color: #e7e7e7;
    }
`;

export const List = styled.ul`
`;

export const BtnBox = styled.div`
  padding-left: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 10px;
  margin-bottom: 5px;

  &::before {
    content: '-';
    position: absolute;
    left: 0;
    top: 5px;
    color: #4c576b;
  }

  textarea {
    font-size: 14px;
    color: #4c576b;
    background-color: #e7e7e7;
  }
`;

export const Box = styled.div`
`;
