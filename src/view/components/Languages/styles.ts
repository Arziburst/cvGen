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
`;

export const LanguageInput = styled.input`
  border: 1px solid transparent;
  background-color: transparent;
  padding-right: 10px;
  display: block;
  width: 100%;
  font-size: 13px;
  font-family: 'NotoSans500';
  font-weight: 500;
  color: #4c576b;
  background-color: #cbb8ad;
  &:focus,
  &:hover {
    border-color: #e8e5e4;
    outline-color: #e8e5e4;
  }

   &::placeholder {
    font-size: inherit;
    color: inherit;
  }
`;

export const RemoveBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  
  &:hover {
    background-color: #a69b97;
  }

  img {
    height: 15px;
    width: 15px;
  }
`;

export const AddBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  
  &:hover {
    background-color: #4c576b;
    color: #e8e5e4;
  }

  &::before {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    background-color: #4c576b;
    color: #e8e5e4;
    height: 100%;
    width: 15px;
    left: 0;
    top: 0;
  }
`;
