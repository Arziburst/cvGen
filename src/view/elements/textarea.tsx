import React, { ChangeEvent, ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { WAIT_TIME } from '../../init';

// Styled
export const TextareaBox = styled.div`
  textarea {
    border: 1px solid transparent;
    background-color: transparent;
    padding-right: 10px;
    display: block;
    width: 100%;
    resize: none;
    color: #cad1dd;

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
`;

type propsType = {
    handleChangeFunc: ((event: ChangeEvent<HTMLTextAreaElement>) => void) & ChangeEventHandler<HTMLInputElement>
    placeholder: string;
    value: string;
}

export const AppTextarea: FC<propsType> = ({ handleChangeFunc, placeholder, value }) => {
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
