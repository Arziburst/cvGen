// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Data
import { educationInithialState } from './data';

// State
export type Education = {
    id: string;
    date: {
        id: string;
        dateStart: null | string;
        dateEnd: null | string;
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
    text: string
}

export type OptionsDateValue = {
    id: string;
    dateStart: string | null
    dateEnd: string | null
}

export type EducationFieldValue = {
    id: string;
    type: string
    data: OptionsValue
}

export type EducationFieldDate = {
    educationId: string;
    type: string
    data: OptionsDateValue
}

type Options = {
    type: keyof typeof educationInithialState[0];
    value: OptionsValue;
}

export type OptionsSecond = {
    id: string;
    data: Education
}

export type OptionsRemoveFieldInBlock = {
    id: string;
    type: keyof typeof educationInithialState[0];
}
// Contracts
export type BaseContact<T = Options> = CaseReducer<EducationState, PayloadAction<T>>
