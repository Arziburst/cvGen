import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
const AddButton = styled.button`
  position: relative;
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'NotoSans400';
  font-weight: 400;
  font-size: 13px;
  color: ${({ theme }) => theme.main.bgSecond};
  text-decoration: underline;
  padding-left: 25px;
  transition: 0.3s ease opacity;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.main.bgSecond};
    border-radius: 50%;
    width: 23px;
    height: 23px;
  }

  &::before {
    width: 10px;
    height: 2px;
    left: 7px;
    top: 10px;
  }

  &::after {
    height: 10px;
    left: 11px;
    width: 2px;
    top: 6px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  &:hover {
    opacity: 0.7;
    transition: 0.3s ease opacity;
  }
`;

type propsType = {
    handleAddFunc: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    text?: string
    style?: React.CSSProperties
}

export const AddBtn: FC<propsType> = ({ handleAddFunc, disabled = false, text, style }) => {
    return (
        <AddButton
            disabled = { disabled }
            style =  { style }
            onClick = { handleAddFunc }>
            Add {text} field
        </AddButton>
    );
};
