// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './slice';

// State
export type Education = {
    id: string;
    date: string;
    degree: string;
    description: string;
}

export type EducationState = Array<Education>;

export type OptionsValue = {
    id: string;
    text: string;
}

type Options = {
    type: keyof typeof initialState[0];
    value: OptionsValue;
}
// Contracts
export type BaseContact<T = Options> = CaseReducer<EducationState, PayloadAction<T>>
