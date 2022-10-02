// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
type Language = {
    id: string
    language: string
}

export type LanguageBlock = {
    title: string
    id: string
    items: Array<Language>
}

type LanguagesState = null | LanguageBlock;

// State
export type FieldsState = {
    languages: LanguagesState
}

// Contracts
export type BaseContact<T = any> = CaseReducer<FieldsState, PayloadAction<T>>
