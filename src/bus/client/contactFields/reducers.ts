// Types
import * as types from './types';

export const contactFieldCreatorAction: types.BaseContact<types.Contact> = (state, action) => {
    return {
        ...state,
        [ action.type ]: action.payload,
    };
};


export const setContactField: types.BaseContact<types.Contact> = (state, action) => state.map((elem) => {
    if (elem.id === action.payload.id) {
        return {
            ...elem,
            url: action.payload.url,
        };
    }

    return elem;
});

export const removeContactField: types.BaseContact<string> = (state, action) => state.filter(
    (contact) => contact.id !== action.payload,
);
