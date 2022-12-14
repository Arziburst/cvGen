// Core
import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
`;

export const Inner = styled.div`
  position: relative;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: #000;
     transition: ease 0.2s opacity;
  }
  button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 15px;
    height: 64px;
    opacity: 1;
    transition: ease 0.3s opacity;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  @media (hover: hover) {
    & button {
      opacity: 0;
    }

    &::before {
      opacity: 0;
    }

    &:hover {
      button {
        opacity: 1;
        transition: ease 0.3s opacity;
      }
      &::before {
        opacity: 0.2;
        transition: ease 0.2s opacity;
      }
    }
  }
`;
