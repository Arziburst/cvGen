// Core
import styled from 'styled-components';

export const Container = styled.section`
    max-width: 833px;
    padding: 0 15px;
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
`;

