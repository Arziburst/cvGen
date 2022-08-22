import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

// Styled
export const Input = styled.input`
  border: 1px solid transparent;
  background-color: transparent;
  &:focus {
    border-color: #000;
    background-color: inherit;
  }
`;

// Types
type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void
    defaultValue: string
}

export const TextInput: FC<propsType> = ({ handleChangeFunc, defaultValue }) => {
    return (
        <Input
            defaultValue = { defaultValue }
            type = 'text'
            onChange = { handleChangeFunc }
        />
    );
};
