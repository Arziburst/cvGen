// Core
import styled from 'styled-components';

export const Container = styled.section`
    max-width: 833px;
    height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.3fr 0.7fr;
`;

export const Column = styled.div`
   &:nth-child(1) {
        padding: 20px 30px;
        background-color: #decabf;
   }

   &:nth-child(2) {
        background-color: #f5f5f5;
   }
`;
