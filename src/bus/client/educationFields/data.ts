import { uniqueId } from 'lodash';

export const educationInithialState = [
    {
        id:   uniqueId(),
        date: {
            id:   uniqueId(),
            text: '',
        },
        degree: {
            id:   uniqueId(),
            text: '',
        },
        description: {
            id:   uniqueId(),
            text: '',
        },
    },
];
