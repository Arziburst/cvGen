// Core
import { ChangeEvent } from 'react';

// Types
export type contactItem = {
    id: string;
    url: string;
    placeholder: string;
}

export type descriptionList = {
    id: string;
    description: string;
}

export type project = {
    id: string,
    name: string,
    customer: string,
    duration: string,
    role: string,
    responsibilities: string,
    teamSize: string,
    stack: string,
}

export type experienceItem = {
    id: string;
    position: string;
    location: string;
    date: string;
    descriptionList: Array<descriptionList>;
    projects: Array<project>
}

export type languagesItem = {
    id: string;
    language: string;
    placeholder: string;
}

export type inputVoidFunc = (event: ChangeEvent<HTMLInputElement>, project: project) => void;

export type textareaVoidFunc = (event: ChangeEvent<HTMLTextAreaElement>, project: project) => void;
