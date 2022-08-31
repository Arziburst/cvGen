// Core
import styled from 'styled-components';

// Assets
import mailIcon from '../../../assets/images/mail-icon.svg';
import phoneIcon from '../../../assets/images/phone-icon.svg';
import homeIcon from '../../../assets/images/home-icon.svg';
import linkedinicon from '../../../assets/images/linkedin-icon.svg';
import githubIcon from '../../../assets/images/github-icon.svg';
export const Container = styled.section`
  padding-bottom: 30px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  margin-bottom: 3px;

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
      background-image: url(${mailIcon});
    }
  }

   &:nth-child(2) {
    &::before {
      background-image: url(${phoneIcon});
    }
  }

  &:nth-child(3) {
    &::before {
      background-image: url(${homeIcon});
    }
  }

  &:nth-child(4) {
    &::before {
      background-image: url(${linkedinicon});
    }
  }

   &:nth-child(5) {
    &::before {
      background-image: url(${githubIcon});
    }
  }
`;

export const SocialInput = styled.input`
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
