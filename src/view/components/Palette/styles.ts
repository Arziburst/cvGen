// Core
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Container = styled.section`
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 82px;
  height: 58px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  padding: 2px;
  border-radius: 12px;
  margin-right: 5px;
  &:hover {
    background-color: #475060;

    ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Icon = styled(ReactSVG)`
  svg {
    fill: #fff;
    color: #fff;
    width: 25px;
    height: 25px;
  }
`;

export const List = styled.ul`
  position: fixed;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  top: 60px;
  padding: 20px 15px;
  padding-top: 4px;
  background-color: #323946;
  max-width: 200px;
  min-height: 100px;
`;

export const Item = styled.li`
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const DecorItem = styled.span`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.main.bgSecond};
  border-radius: 5px;
  margin-left: 10px;
`;

export const ThemeBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const Text = styled.p`
  width: 100%;
  font-family: 'NotoSans400',sans-serif;
  font-weight: 400;
  display: block;
  text-align: center;
  color: #f5f5f5;
  font-size: 13px;
  cursor: default;
`;
