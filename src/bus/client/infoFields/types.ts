// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Slice
import { initialState } from './slice';

// State
export type InfoFieldsState = {
    avatar: string;
    name: string;
    position: string;
    overview: string;
}

export type InfoFieldsOptions = {
    type: keyof typeof initialState;
    value: string;
}

// Contracts
export type BaseContact<T = InfoFieldsOptions> = CaseReducer<InfoFieldsState, PayloadAction<T>>
