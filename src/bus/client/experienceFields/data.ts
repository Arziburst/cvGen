import { uniqueId } from 'lodash';

export const projectInithialState = {
    id:   uniqueId(),
    name: {
        id:   uniqueId(),
        text: '',
    },
    customer: {
        id:   uniqueId(),
        text: '',
    },
    duration: {
        id:        uniqueId(),
        dateStart: null,
        dateEnd:   null,
    },
    role: {
        id:   uniqueId(),
        text: '',
    },
    responsibilities: {
        id:   uniqueId(),
        text: '',
    },
    teamSize: {
        id:   uniqueId(),
        text: '',
    },
    stack: {
        id:   uniqueId(),
        text: '',
    },
};

export const descriptionInihialState = {
    id:          uniqueId(),
    description: '',
};

export const experienceInithialState = {
    id:       uniqueId(),
    position: {
        id:   uniqueId(),
        text: '',
    },
    location: {
        id:   uniqueId(),
        text: '',
    },
    date: {
        id:        uniqueId(),
        dateStart: null,
        dateEnd:   null,
    },
    descriptionList: null,
    projects:        null,
};
