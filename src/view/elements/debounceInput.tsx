// Core
import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

// Constant
import { WAIT_TIME } from '../../init';
import { useThemes } from '../../bus/client/themes';

// Types
type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
    decorElemColor: string;
}

// Styled
export const InputBox = styled.label<{ isFocusElem: boolean }>`
  width: 100%;
  position: relative;
  display: block;

  input {
    border: 2px solid transparent;
    background-color: transparent;
    display: block;
    width: 100%;
    padding-right: 10px;
    height: 30px;
    z-index: 2;
    border-color: ${({ isFocusElem, theme }) => isFocusElem ? theme.accent.bg : ''};

    &:focus,
    &:hover {
      border-color: ${({ theme }) => theme.main.color};
      outline-color: transparent;
    }
  }
  
  ${({ isFocusElem }) => isFocusElem ? `
    p {
      display: inline-block;
      font-size: 12px !important;
      padding: 0 4px;
      color: #fff;
      top: -6px;
      left: 6px;
      opacity: 1;
      transform: translateY(0);
       transition: ease 0.3s left, ease 0.3s top, ease 0.3s transform;
    }
  ` : ''}

  @media (max-width: 360px) {
    input {
      height: 40px;
    }
  }
`;
export const DecorText = styled.p<{decorElemColor: string, isFocusElem: boolean}>`
  position: absolute;
  pointer-events: none;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  transition: ease 0.3s left, ease 0.3s top, ease 0.3s transform;
  opacity: 0.8;

  span {
    position: relative;
    float: unset;
    z-index: 4;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 3;
    left: 0;
    top: 6px;
    width: 100%;
    height: 3px;
    background-color: ${({ decorElemColor }) => decorElemColor};
    opacity: ${({ isFocusElem }) => isFocusElem ? '1' : '0'};
  }
`;

export const AppDebounceInput: FC<propsType> = ({ handleChangeFunc, placeholder, value, decorElemColor }) => {
    const [ isFocused, setIsFocused ] = useState(value.length > 0);
    const { themes } = useThemes();

    return (
        <InputBox
            isFocusElem = { isFocused }>
            <DecorText
                decorElemColor = { decorElemColor }
                isFocusElem = { isFocused }>
                <span>
                    {placeholder}
                </span>
            </DecorText>
            <DebounceInput
                debounceTimeout = { WAIT_TIME }
                style = {{
                    borderColor: isFocused ? themes.main.color : '',
                    borderWidth: isFocused ? '2px' : '',
                }}
                type = 'text'
                value = { value }
                onBlur = { () => {
                    if (value.length === 0) {
                        setIsFocused(false);
                    }
                } }
                onChange = { (event) => {
                    handleChangeFunc(event);

                    if (value.length > 0) {
                        setIsFocused(true);
                    }
                } }
                onFocus = { () => setIsFocused(true) }
            />
        </InputBox>
    );
};
