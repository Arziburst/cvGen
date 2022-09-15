// Types
import * as types from './types';

export const contactFieldCreatorAction: types.BaseContact = (state, action) => state.map(
    (contact) => {
        if (contact.id === action.payload.value.id) {
            return {
                ...contact,
                [ action.payload.type ]: action.payload.value.url,
            };
        }

        return contact;
    },
);

export const addContactField: types.BaseContact<types.ContactsState> = (state, action) => action.payload.map(
    (contact, index) => {
        if (state.indexOf(contact) === -1) {
            return {
                ...contact,
                url: state[ index ] ? state[ index ].url : contact.url,
            };
        }

        return contact;
    },
);

export const removeContactField: types.BaseContact<string> = (state, action) => state.filter(
    (contact) => contact.id !== action.payload,
);

export const resetContactFields: types.BaseContact<types.ContactsState> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state = [ ...action.payload ];

    return action.payload;
};
