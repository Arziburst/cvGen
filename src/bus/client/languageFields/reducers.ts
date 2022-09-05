// Types
import * as types from './types';

export const setLanguageFields: types.BaseContact<types.Language> = (state, action) => state.map(
    (language) => ({
        ...language,
        [ action.type ]: action.payload,
    }),
);

export const removeLanguageFields: types.BaseContact = (state, action) => state.filter(
    (language) => language.id !== action.payload,
);

export const addLanguageFields: types.BaseContact = (state, action) => [
    ...state,
    {
        id:       action.payload,
        language: '',
    },
];
