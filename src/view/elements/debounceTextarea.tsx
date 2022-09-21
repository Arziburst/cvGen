import React, { ChangeEvent, ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { WAIT_TIME } from '../../init';

// Styled
export const TextareaBox = styled.div`
  width: 100%;

  textarea {
    border: 1px solid transparent;
    background-color: transparent;
    padding-right: 10px;
    display: block;
    width: 100%;
    resize: none;
    color: ${({ theme }) => theme.main.color};

    &:focus,
    &:hover {
      border-color:  ${({ theme }) => theme.main.colorSecond};
      outline-color: ${({ theme }) => theme.main.colorSecond};
    }

    &::placeholder {
      font-size: inherit;
      color: inherit;
    }
  }
`;

type propsType = {
    handleChangeFunc: ((event: ChangeEvent<HTMLTextAreaElement>) => void) & ChangeEventHandler<HTMLInputElement>
    placeholder: string;
    value: string;
}

export const AppDebounceTextarea: FC<propsType> = ({ handleChangeFunc, placeholder, value }) => {
    return (
        <TextareaBox>
            <DebounceInput
                debounceTimeout = { WAIT_TIME }
                element = 'textarea'
                placeholder = { placeholder }
                value = { value }
                onChange = { handleChangeFunc }
            />
        </TextareaBox>
    );
};
