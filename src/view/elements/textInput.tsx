// Core
import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

// Constant
import { WAIT_TIME } from '../../init';

// Styled
export const InputBox = styled.div`
  input {
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
  }

  @media (max-width: 360px) {
    input {
      height: 40px;
    }
  }
`;

type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}

export const AppInput: FC<propsType> = ({ handleChangeFunc, placeholder, value }) => {
    return (
        <InputBox>
            <DebounceInput
                debounceTimeout = { WAIT_TIME }
                placeholder = { placeholder }
                type = 'text'
                value = { value }
                onChange = { handleChangeFunc }
            />
        </InputBox>
    );
};
