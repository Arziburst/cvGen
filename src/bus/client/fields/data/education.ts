import { uniqueId } from 'lodash';

export const educationInithialState = {
    title: 'educations',
    id:    uniqueId(),
    items: [
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
    ],
};

