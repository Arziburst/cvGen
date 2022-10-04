// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Slice
import { initialState } from './slice';
import { educationInithialState } from './data';

// Types
export type Field = {
    id: string
    text: string
}

export type EducationField = {
    id: string
    date: {
        id: string
        text: string
    },
    degree: {
        id: string
        text: string
    },
    description: {
        id: string
        text: string
    },
}

interface infoField {
    title: string
    id: string
}

export interface FieldsBlock extends infoField {
    items: Array<Field>
}
export interface EducationFieldsBlock extends infoField {
    items: Array<EducationField>
}

export type FieldData = {
    type: FieldsType
    id: string
    data: string
    fieldName?: keyof typeof educationInithialState.items[0]
}

export type FieldsType = keyof typeof initialState;

export type FieldOptions = {
    type: FieldsType
    data: FieldsBlock | EducationFieldsBlock
}

export type FieldRemoveOptions = {
    type: FieldsType
    id: string
}

export type FieldAddOptions = {
    type: FieldsType
    data: Field | EducationFieldsBlock
}

// State
export type FieldsState = {
    languages: FieldsBlock | null
    skills: FieldsBlock | null
    educations: EducationFieldsBlock | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<FieldsState, PayloadAction<T>>
