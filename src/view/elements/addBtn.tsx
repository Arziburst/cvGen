import React, { FC } from 'react';
import styled from 'styled-components';

// Styled
const AddButton = styled.button`
  display: block;
  font-family: 'NotoSans500';
  width: 60px;
  height: 35px;
  font-weight: 500;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  border: 1px solid #4c576b;

  &:hover {
    background-color: #4c576b;
    color: #e8e5e4;
  }

  &::before {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    background-color: #4c576b;
    color: #e8e5e4;
    height: 100%;
    width: 15px;
    left: 0;
    top: 0;
  }
`;

type propsType = {
    handleAddFunc: React.MouseEventHandler<HTMLButtonElement>
}

export const AddBtn: FC<propsType> = ({ handleAddFunc }) => {
    return (
        <AddButton onClick = { handleAddFunc }>
            Add
        </AddButton>
    );
};
