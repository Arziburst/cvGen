// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Slice
import { initialState } from './slice';

// State
export type descriptionList = {
    id: string;
    description: string;
}

export type project = {
    id: string;
    name: string;
    customer: string;
    duration: string;
    role: string;
    responsibilities: string;
    teamSize: string;
    stack: string;
}

export type Experience = {
    id: string;
    position: string;
    location: string;
    date: string;
    descriptionList: Array<descriptionList>;
    projects: Array<project>;
}

export type ExperienceFieldsState = Array<Experience>

export type ExperienceData = {
    id: string;
    text: string;
}

export type ExperienceOptions = {
    type: keyof typeof initialState[0];
    value: ExperienceData;
}

export type ExperienceDescriptionOptions = {
    type: keyof typeof initialState[0]['descriptionList'];
    value: ExperienceData;
}


export type ExperienceProjectsOptions = {
    type: keyof typeof initialState[0]['projects'];
    value: ExperienceData;
}

// Contracts
export type BaseContact<T = any> = CaseReducer<ExperienceFieldsState, PayloadAction<T>>
