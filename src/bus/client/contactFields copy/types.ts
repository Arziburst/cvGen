// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Education = {
    id: string;
    date: string;
    degree: string;
    description: string;
}

export type EducationState = Array<Education>;

// Contracts
export type BaseContact<T = any> = CaseReducer<EducationState, PayloadAction<T>>
