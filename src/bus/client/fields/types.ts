// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Slice
import { initialState } from './slice';

// Types
export type Field = {
    id: string
    text: string
}

interface infoField {
    title: string
    id: string
}

export interface FieldsBlock extends infoField {
    items: Array<Field>
}

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
    data: Field | FieldsBlock
}

// State
export type FieldsState = {
    languages: FieldsBlock | null
    skills: FieldsBlock | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<FieldsState, PayloadAction<T>>
