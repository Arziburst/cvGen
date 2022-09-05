// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './slice';

// State
export type Contact = {
    id: string;
    url: string;
}

export type ContactsState = Array<Contact>;

type Options = {
    type: keyof typeof initialState[0];
    value: Contact;
}

// Contracts
export type BaseContact<T = Options> = CaseReducer<ContactsState, PayloadAction<T>>
