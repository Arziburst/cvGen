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

  @media (max-width: 360px) {
    height: 40px;
  }
`;

type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}

export const AppInput: FC<propsType> = ({ handleChangeFunc, placeholder, value }) => {
    return (
        <Input
            placeholder = { placeholder }
            type = 'text'
            value = { value }
            onChange = { handleChangeFunc }
        />
    );
};
