import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
const AddFieldButton = styled.button`
  position: relative;
  padding: 20px 0;
  padding-left: 25px;
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'NotoSans400';
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.main.bgSecond};
  text-decoration: underline;
  width: 100%;
  text-align: start;
  border: 2px solid ${({ theme }) => theme.main.bgSecond};
  transition: 0.2s ease background-color;
  margin-bottom: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.main.bgSecond};
  }

  &::before {
    width: 15px;
    height: 2px;
    left: 5px;
  }

  &::after {
    height: 15px;
    left: 11px;
    width: 2px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  &:hover {
    background-color:  ${({ theme }) => theme.accent.bgPrimary};
    transition: 0.2s ease background-color;
  }

`;

type propsType = {
    handleAddFunc: React.MouseEventHandler<HTMLButtonElement>
    fieldName: string
}

export const AddFieldBlockBtn: FC<propsType> = ({ handleAddFunc, fieldName }) => {
    return (
        <AddFieldButton onClick = { handleAddFunc }>
            Added {fieldName} block
        </AddFieldButton>
    );
};
