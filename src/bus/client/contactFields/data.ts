import { uniqueId } from 'lodash';

export const contactsInitialState = {
    mail: {
        id:  uniqueId(),
        url: '',
    },
    address: {
        id:  uniqueId(),
        url: '',
    },
    phone:    null,
    linkedin: null,
    github:   null,
};
