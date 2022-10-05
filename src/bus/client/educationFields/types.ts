// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Data
import { educationInithialState } from './data';

// State
export type Education = {
    id: string;
    date: {
        id: string;
        text: string;
    }
    degree: {
        id: string;
        text: string;
    }
    description: {
        id: string;
        text: string;
    }
}

export type EducationState = Array<Education> | null;

export type OptionsValue = {
    id: string;
    text: string;
}

export type EducationFieldValue = {
    id: string;
    type: string
    data: OptionsValue
}

type Options = {
    type: keyof typeof educationInithialState[0];
    value: OptionsValue;
}

export type OptionsSecond = {
    id: string;
    data: Education
}
// Contracts
export type BaseContact<T = Options> = CaseReducer<EducationState, PayloadAction<T>>
