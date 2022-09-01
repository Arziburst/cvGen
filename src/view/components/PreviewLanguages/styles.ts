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

