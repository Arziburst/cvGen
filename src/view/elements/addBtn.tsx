import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
const AddButton = styled.button`
  position: relative;
  display: block;
  width: 23px;
  height: 23px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.main.bgSecond};
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.main.colorSecond};
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
`;

type propsType = {
    handleAddFunc: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export const AddBtn: FC<propsType> = ({ handleAddFunc, disabled = false }) => {
    return (
        <AddButton
            disabled = { disabled }
            onClick = { handleAddFunc }
        />
    );
};
