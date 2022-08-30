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

export type experienceItem = {
    id: string;
    position: string;
    location: string;
    date: string;
    descriptionList: Array<descriptionList>;
}

export type languagesItem = {
    id: string;
    language: string;
    placeholder: string;
}
