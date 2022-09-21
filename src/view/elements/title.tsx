import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
export const BlockTitle = styled.h3`
  position: relative;
  font-family: 'NotoSans800', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: ${({ theme }) => theme.main.color};
  margin-bottom: 10px;

  &::before {
   content: '';
   position: absolute;
   height: 20px;
   width: 20px;
   left: -30px;
   top: 2px;
   background-color: ${({ theme }) => theme.main.bgSecond};
  }

   @media (max-width: 360px) {
       &::before {
          left: -10px;
          height: 16px;
          top: 4px;
          width: 8px;
       }
   }
`;

// Types
type propsType = {
    text: string
}

export const Title: FC<propsType> = ({ text }) => {
    return (
        <BlockTitle>
            {text}
        </BlockTitle>
    );
};
