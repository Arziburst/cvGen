import { uniqueId } from 'lodash';

export const skillsInithialState = {
    title: 'skills',
    id:    uniqueId(),
    items: [
        {
            id:   uniqueId(),
            text: '',
        },
    ],
};
