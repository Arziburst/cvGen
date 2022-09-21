// Core
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PropsType = {
    isOpen: boolean
}

export const Container = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 8px 0;
  background-color: #262b34;
  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
  z-index: 5;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  color: #fff;
`;

export const Navigation = styled.nav`
  @media (max-width: 992px) {
    order: -1;
  }
`;

export const MenuBtn = styled.button<PropsType>`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: ease 0.2s opacity;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
    transition: ease 0.2s top, ease 0.2s bottom, ease 0.2s rotate;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media (max-width: 992px) {
    display: flex;
  }

  ${({ isOpen }) => isOpen ? `
    &:before {
      rotate: 45deg;
      top: 9px;
      transition: ease 0.2s top, ease 0.2s rotate;
    }

    &:after {
      rotate: -45deg;
      bottom: 8px;
      transition: ease 0.2s bottom, ease 0.2s rotate;
    }

    span {
      opacity: 0;
      transition: ease 0.2s opacity;
    }
  ` : null}
`;

export const DecorLine = styled.span`
  display: block;
  background-color: #fff;
  width: 100%;
  height: 2px;
`;

export const List = styled.ul<PropsType>`
  display: flex;

  @media (max-width: 992px) {
    position: fixed;
    display: block;
    padding: 10px 0;
    top: 64px;
    width: 100%;
    left: 0;
    opacity: 0;
    transform: translateY(-100%);
    visibility: hidden;
    background-color: #262b34;
    transition: ease 0.2s transform, ease 0.2s opacity, ease 0.2s visibility;
  }


  ${({ isOpen }) => isOpen ? `
    @media (max-width: 992px) {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      transition: ease 0.2s transform, ease 0.2s opacity, ease 0.2s visibility;
    }
  ` : null}
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 992px) {
    margin: 0 auto;
    text-align: center;
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export const AnchorLink = styled.a`
  color: inherit;
  @media (hover: hover) {
    &:hover {
      color: #FF9640;
      transition: ease 0.2s color;
    }
  }

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

export const CreateResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  color: #262b34;
  text-decoration: none;
  height: 100%;
  min-width: 64px;
  padding: 6px 16px;
`;
