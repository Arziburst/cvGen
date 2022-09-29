import React, { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { WAIT_TIME } from '../../init';
import { useThemes } from '../../bus/client/themes';

// Styled
import { DecorText } from './debounceInput';
export const TextareaBox = styled.label<{ isFocusElem: boolean }>`
  width: 100%;
  position: relative;

  textarea {
    border: 1px solid transparent;
    background-color: transparent;
    padding-right: 10px;
    display: block;
    width: 100%;
    resize: none;
    color: ${({ theme }) => theme.main.color};
    height: 100px;
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
`;

type propsType = {
    handleChangeFunc: ((event: ChangeEvent<HTMLTextAreaElement>) => void) & ChangeEventHandler<HTMLInputElement>
    placeholder: string;
    value: string;
    decorElemColor: string;
}

export const AppDebounceTextarea: FC<propsType> = ({ handleChangeFunc, placeholder, value, decorElemColor }) => {
    const [ isFocused, setIsFocused ] = useState(value.length > 0);
    const { themes } = useThemes();

    return (
        <TextareaBox
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
                element = 'textarea'
                style = {{
                    borderColor: isFocused ? themes.main.color : '',
                    borderWidth: isFocused ? '2px' : '',
                }}
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
        </TextareaBox>
    );
};
