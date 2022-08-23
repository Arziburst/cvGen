import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
export const BlockTitle = styled.h3`
  font-family: 'NotoSans800', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: #4c576b;
  margin-bottom: 10px;
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
