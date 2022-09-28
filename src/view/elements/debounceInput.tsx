// Core
import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

// Constant
import { WAIT_TIME } from '../../init';

// Types
type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
}
// Styled
export const InputBox = styled.label`
  width: 100%;
  position: relative;

  input {
    border: 1px solid transparent;
    background-color: transparent;
    display: block;
    width: 100%;
    padding-right: 10px;
    height: 30px;

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.main.colorSecond};
      outline-color: transparent;
    }
  }

  @media (max-width: 360px) {
    input {
      height: 40px;
    }
  }
`;
export const DecorText = styled.p<{value: string}>`
  font-size: inherit;
  color: #fff;
  position: absolute;
  left: 15px;
  top: -9px;
  span {
    position: relative;
    z-index: 4;
  }
  &::before {
    content: '';
    position: absolute;
    opacity: 0;
    z-index: 3;
    left: -1px;
    top: 7px;
    width: calc(100% + 4px);
    height: 3px;
    background-color: #384052;
  }

`;

export const AppDebounceInput: FC<propsType> = ({ handleChangeFunc, placeholder, value }) => {
    return (
        <InputBox>
            <DecorText value = { value }>
                <span>
                    {placeholder}
                </span>
            </DecorText>
            <DebounceInput
                debounceTimeout = { WAIT_TIME }
                type = 'text'
                value = { value }
                onChange = { handleChangeFunc }
            />
        </InputBox>
    );
};
