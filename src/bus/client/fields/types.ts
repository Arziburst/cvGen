// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Slice
import { initialState } from './slice';

// Types
export type Field = {
    id: string
    text: string
}

export type FieldsBlock = {
    title: string
    id: string
    items: Array<Field>
}

export type FieldBlockState = null | FieldsBlock

export type FieldData = {
    type: FieldsType
    id: string
    data: string
}

export type FieldsType = keyof typeof initialState;

export type FieldOptions = {
    type: FieldsType
    data: FieldsBlock
}

export type FieldRemoveOptions = {
    type: FieldsType
    id: string
}

export type FieldAddOptions = {
    type: FieldsType
    data: Field
}

// State
export type FieldsState = {
    languages: FieldBlockState
    skills: FieldBlockState
}

// Contracts
export type BaseContact<T = any> = CaseReducer<FieldsState, PayloadAction<T>>
