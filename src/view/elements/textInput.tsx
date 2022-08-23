import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

// Styled
export const Input = styled.input`
  border: 1px solid transparent;
  background-color: transparent;
  padding-right: 10px;
  display: block;
  width: 100%;

  &:focus,
  &:hover {
    border-color: #e8e5e4;
    outline-color: #e8e5e4;
  }

   &::placeholder {
    font-size: inherit;
    color: inherit;
  }
`;

// Types
type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    defaultValue: string;
}

export const AppInput: FC<propsType> = ({ handleChangeFunc, placeholder, defaultValue }) => {
    return (
        <Input
            defaultValue = { defaultValue }
            placeholder = { placeholder }
            type = 'text'
            onChange = { handleChangeFunc }
        />
    );
};
