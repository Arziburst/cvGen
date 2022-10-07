// Slice
import { initialState } from './slice';

// Types
import * as types from './types';

export const contactFieldCreatorAction: types.BaseContact<types.ContactData> = (state, action) => {
    if (state !== null) {
        return {
            ...state,
            [ action.payload.type ]: {
                ...action.payload.data,
            },
        };
    }

    return state;
};

export const addContact: types.BaseContact<types.Contacts> = (state, action) => {
    if (state === null) {
        return action.payload;
    }

    return state;
};

export const removeContactField: types.BaseContact<types.ContactsChangeType> = (state, action) => {
    if (state !== null) {
        return {
            ...state,
            [ action.payload ]: null,
        };
    }

    return state;
};

export const addContactField: types.BaseContact<types.ContactData> = (state, action) => {
    if (state !== null) {
        return {
            ...state,
            [ action.payload.type ]: action.payload.data,
        };
    }

    return state;
};

export const resetContact = () => initialState;

