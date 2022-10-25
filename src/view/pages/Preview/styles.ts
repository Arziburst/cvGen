// Core
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const BtnContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  top: 70px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    width: auto;
    left: 15px;
    top: 60px;
    transform: translate(0);
  }
`;

export const NavBtn = styled.button`
  font-family: 'NotoSans400';
  font-weight: 400;
  font-size: 14px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #4c576b;
  color: #fff;
  cursor: pointer;
  transition: ease 0.2s background-color;

  &:hover {
    background-color: #242b39;
    transition: ease 0.2s background-color;
  }
`;
