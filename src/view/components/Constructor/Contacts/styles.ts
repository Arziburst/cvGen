// Core
import styled from 'styled-components';

// Assets
import {
    svgMailIcon, svgPhoneIcon, svgHomeIcon,
    svgLinkedinIcon, svgGithubIcon,
} from '../../../../assets/images';

export const Container = styled.section`
  padding-bottom: 30px;
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

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  margin-bottom: 3px;
  align-items: center;

  input {
    font-family: 'NotoSans500';
    font-weight: 500;
    font-size: 14px;
    color: #4c576b;
    background-color: #cbb8ad;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &:nth-child(1) {
    &::before {
      background-image: url(${svgMailIcon});
    }
  }

   &:nth-child(2) {
    &::before {
      background-image: url(${svgPhoneIcon});
    }
  }

  &:nth-child(3) {
    &::before {
      background-image: url(${svgHomeIcon});
    }
  }

  &:nth-child(4) {
    &::before {
      background-image: url(${svgLinkedinIcon});
    }
  }

   &:nth-child(5) {
    &::before {
      background-image: url(${svgGithubIcon});
    }
  }

  
  @media (max-width: 360px) {
    &::before {
        top: 14px;
    }
  } 
`;
