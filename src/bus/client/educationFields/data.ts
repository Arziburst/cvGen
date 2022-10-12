import { uniqueId } from 'lodash';

export const educationInithialState = [
    {
        id:   uniqueId(),
        date: {
            id:        uniqueId(),
            dateStart: null,
            dateEnd:   null,
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
