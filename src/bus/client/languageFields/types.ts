// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

//Slice
import { initialState } from './slice';

// State
export type Language = {
    id: string;
    language: string;
}

export type LanguageFieldsState = Array<Language>;

export type LanguageOptions = {
    type: keyof typeof initialState[0];
    value: Language;
}
// Contracts
export type BaseContact<T = LanguageOptions> = CaseReducer<LanguageFieldsState, PayloadAction<T>>
