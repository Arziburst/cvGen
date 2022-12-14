// Core
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const Container = styled.section`
    max-width: 833px;
    padding: 0 15px;
    position: relative;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
     display: grid;
     grid-template-columns: 0.5fr 1fr;

     &:nth-child(3) {
          flex: 1 1 auto;
     }

     @media (max-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
     }

     @media (max-width: 630px) {
         display: block;
     }
`;

export const Column = styled.div`
   &:nth-child(1) {
        background-color: ${({ theme }) => theme.accent.bgSecond};
   }

   &:nth-child(2) {
        background-color: ${({ theme }) => theme.accent.avatar};
   }
`;

export const SecondColumn = styled.div`
   padding: 20px 30px;  
   &:nth-child(1) {
          background-color: ${({ theme }) => theme.accent.bgSecond};
   }

   &:nth-child(2) {
     background-color: ${({ theme }) => theme.accent.avatar};
   }

   @media (max-width: 360px) {
       padding: 10px;
   }
`;

export const ActionBoxContainer = styled.div`
    max-width: 833px;
    padding: 0 15px;
    margin: 0 auto;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 420px) {
     align-items: center;
     a {
          flex-direction: column;
          font-size: 10px;
     }
    }
`;

export const BtnBox = styled.div`
     display: flex;
     align-items: center;
`;

export const SvgIcon = styled(ReactSVG)`
     svg {
          max-width: 25px;
          fill: #fff;
     }
`;

export const BtnActionBox = styled.div`
   position: sticky;
   left: 0;
   top: 0;
   z-index: 2;
   display: flex;
   align-items: center;
   background-color: #262b34;
   height: 72px;
   padding: 8px 0;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const BtnBoxBtn = styled.button`
     background-color: transparent;
     border: none;
     padding: 0;
     cursor: pointer;
     text-align: center;
     width: 64px;
     height: 58px;
     box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
     padding: 2px;
     border-radius: 12px;

     &:not(:last-child) {
          margin-right: 5px;
     }

     span {
          font-family: 'NotoSans400', sans-serif;
          font-weight: 400;
          display: block;
          color: #f5f5f5;
     }

     &:hover {
          background-color: #475060;
     }
`;

export const PreviewBtn = styled(BtnBoxBtn)`
     position: fixed;
     right: auto;
     margin-left: -80px;
     top: 50%;
     background-color: #262b34;

     @media (max-width: 992px) {
          right: 50%;
          transform: translatex(50%);
          margin-left: 0;
          z-index: 10;
          bottom: 10px;
          top: auto;
     }
`;
