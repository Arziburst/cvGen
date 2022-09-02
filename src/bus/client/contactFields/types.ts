// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Contact = {
    id: string;
    url: string;
    placeholder: string;
}

export type ContactsState = Array<Contact>;

// Contracts
export type BaseContact<T = any> = CaseReducer<ContactsState, PayloadAction<T>>
