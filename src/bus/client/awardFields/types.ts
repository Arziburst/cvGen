// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './slice';

// State
export type Award = {
    id: string;
    received: string;
    date: string;
    location: string;
}
export type AwardFieldsState = Array<Award>

export type AwardData = {
    id: string;
    text: string;
}

type AwardOption = {
    type: keyof typeof initialState[0];
    value: AwardData;
}

// Contracts
export type BaseContact<T = AwardOption> = CaseReducer<AwardFieldsState, PayloadAction<T>>
