import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { descriptionList } from '../../bus/client/types';

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

type handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => void;
type handleChangeObject = (event: ChangeEvent<HTMLTextAreaElement>, changeObj: descriptionList | undefined) => void;

type propsType = {
    handleChangeFunc: handleChangeText | handleChangeObject
    placeholder: string;
    defaultValue: string;
    changeObj?: descriptionList
}

export const AppTextarea: FC<propsType> = ({ handleChangeFunc, placeholder, defaultValue, changeObj }) => {
    return (
        <Textarea
            defaultValue = { defaultValue }
            placeholder = { placeholder }
            onChange = { (event) => handleChangeFunc(event, changeObj) }
        />
    );
};
