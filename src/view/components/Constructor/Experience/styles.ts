// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 25px;
`;

export const Inner = styled.div`
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h3 {
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 25px;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.accent.bgSecond};
  }

  input,p {
    display: block;
    font-family: 'NotoSans800';
    font-weight: 800;
    font-size: 17px;
    color: ${({ theme }) => theme.main.color};
  }

  div {
    &:nth-child(1) {
      margin-right: 25px;
    }
  }

  @media (max-width: 360px) {
    margin-right: 25px;
    display: block;
    label {
      display: block;
      width: 100%;
      margin-bottom: 5px;
    }
  }
`;

export const Location = styled.div`
  margin-bottom: 15px;
  margin-right: 25px;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.accent.bgSecond};
  }

  input,p {
    font-family: 'NotoSans800';
    font-weight: 800;
    font-size: 14px;
    color: ${({ theme }) => theme.main.color};
  }
`;

export const List = styled.ul`
`;

export const BtnBox = styled.div`
  padding-left: 10px;
`;

export const RemoveBtn = styled.button`
  position: absolute;
  display: block;
  width: 23px;
  height: 23px;
  background-color: transparent;
  border: none;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.main.bgSecond};
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.main.colorSecond};
    width: 10px;
    height: 2px;
    left: 7px;
    top: 10px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;

  textarea {
    background-color: ${({ theme }) => theme.accent.bgSecond};
  }

  textarea, p {
    font-size: 14px;
    color: ${({ theme }) => theme.main.color};
  }
`;

export const Box = styled.div`
  margin-bottom: 15px;
  position: relative;

`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;

  h3 {
    padding-left: 17px;
    margin-bottom: 0;
    font-size: 19px;
    margin-right: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.main.bgSecond};
    }
  }
`;
