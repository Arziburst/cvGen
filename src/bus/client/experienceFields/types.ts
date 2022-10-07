// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type ExperienceData = {
    id: string;
    text: string;
}

export type DescriptionList = {
    id: string;
    description: string;
}

export type Project = {
    id: string;
    name: ExperienceData;
    customer: ExperienceData;
    duration: ExperienceData;
    role: ExperienceData;
    responsibilities: ExperienceData;
    teamSize: ExperienceData;
    stack: ExperienceData;
}

export type ExperienceFullData = {
    id: string
    position: ExperienceData
    location: ExperienceData
    date: ExperienceData
    descriptionList: null | Array<DescriptionList>;
    projects: null | Array<Project>;
}


export type ExperienceCreatorAction = {
    id: string
    data: ExperienceData
    type: 'position' | 'location' | 'date'
}

export type ExperienceDescrCreatorAction = {
    id: string
    data: DescriptionList
}

export type ExperienceProjectCreatorAction = {
    id: string
    data: Project
}

export type ExperienceProjectRemoveField = {
    experienceId: string
    projectId: string
    type: 'name' | 'customer' | 'duration' | 'role' | 'responsibilities' | 'teamSize' | 'stack'
}

export type ExperienceProjectCreatorActionSecond = {
    type: 'name' | 'customer' | 'duration' | 'role' | 'responsibilities' | 'teamSize' | 'stack'
    experienceId: string
    projectId: string
    data: ExperienceData
}

// State
export type ExperienceFieldsState = Array<ExperienceFullData> | null


// Contracts
export type BaseContact<T> = CaseReducer<ExperienceFieldsState, PayloadAction<T>>
