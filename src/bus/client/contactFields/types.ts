// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

type ContactField = {
    id: string
    url: string
}

export type Contacts = {
    phone: ContactField
    mail: ContactField
    address: ContactField | null
    linkedin: ContactField | null
    github: ContactField | null
}

// State
export type ContactsState = Contacts | null

export type ContactsChangeType = 'phone' | 'mail' | 'address' | 'linkedin' | 'github'

export type ContactChangeData = {
    type: ContactsChangeType
    url: string
}

export type ContactData = {
    type: ContactsChangeType
    data: ContactField
}

// Contracts
export type BaseContact<T> = CaseReducer<ContactsState, PayloadAction<T>>
