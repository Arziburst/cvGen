import { uniqueId } from 'lodash';

export const contactsInitialState = {
    mail: {
        id:  uniqueId(),
        url: '',
    },
    address:  null,
    phone:    null,
    linkedin: null,
    github:   null,
};
