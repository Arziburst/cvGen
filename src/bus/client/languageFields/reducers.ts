// Types
import * as types from './types';

export const setLanguageFields: types.BaseContact = (state, action) => state.map(
    (language) => {
        if (language.id === action.payload.value.id) {
            return {
                ...language,
                [ action.payload.type ]: action.payload.value.language,
            };
        }

        return language;
    },
);

export const removeLanguageFields: types.BaseContact<string> = (state, action) => state.filter(
    (language) => language.id !== action.payload,
);

export const addLanguageFields: types.BaseContact<string> = (state, action) => [
    ...state,
    {
        id:       action.payload,
        language: '',
    },
];

export const resetLanguageFields: types.BaseContact<types.LanguageFieldsState> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state = [ ...action.payload ];

    return action.payload;
};

