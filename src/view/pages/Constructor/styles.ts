// Core
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
     grid-template-columns: 0.3fr 0.7fr;

     &:nth-child(2) {
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
        background-color: #decabf;
   }

   &:nth-child(2) {
        background-color: #f5f5f5;
   }
`;

export const SecondColumn = styled.div`
   padding: 20px 30px;
   &:nth-child(1) {
        background-color: #decabf;
   }

   &:nth-child(2) {
        background-color: #f5f5f5;
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
    justify-content: center;
`;

export const BtnActionBox = styled.div`
   position: sticky;
   left: 0;
   top: 0;
   z-index: 2;
   display: flex;
   align-items: center;
   background-color: #262b34;
   height: 64px;
   padding: 8px 0;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

   button {
     background-color: transparent;
     border: none;
     padding: 0;
     cursor: pointer;
     text-align: center;
     width: 64px;
     height: 56px;
     span {
          font-family: 'NotoSans400', sans-serif;
          font-weight: 400;
          display: block;
          color: #f5f5f5;
     }

     img {
          max-width: 30px;
     }

     &:hover {
          background-color: #475060;
     }
   }
`;

