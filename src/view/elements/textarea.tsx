import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

// Styled
export const Textarea = styled.textarea`
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
`;

// Types
type propsType = {
    handleChangeFunc: (event: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder: string;
    defaultValue: string;
}

export const AppTextarea: FC<propsType> = ({ handleChangeFunc, placeholder, defaultValue }) => {
    return (
        <Textarea
            defaultValue = { defaultValue }
            placeholder = { placeholder }
            onChange = { handleChangeFunc }
        />
    );
};
