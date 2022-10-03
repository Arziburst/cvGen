import { uniqueId } from 'lodash';

export const languageInithialState = {
    title: 'languages',
    id:    uniqueId(),
    items: [
        {
            id:   uniqueId(),
            text: 'English',
        },
    ],
};
