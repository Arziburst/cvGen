// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Language = {
    id: string;
    language: string;
}

export type LanguageFieldsState = Array<Language>;

// Contracts
export type BaseContact<T = string> = CaseReducer<LanguageFieldsState, PayloadAction<T>>
