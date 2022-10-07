import { uniqueId } from 'lodash';

export const contactsInitialState = {
    phone: {
        id:  uniqueId(),
        url: '',
    },
    mail: {
        id:  uniqueId(),
        url: '',
    },
    address:  null,
    linkedin: null,
    github:   null,
};
