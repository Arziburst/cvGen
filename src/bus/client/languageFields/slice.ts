// Core
import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:       uniqueId(),
        language: '',
    },
    {
        id:       uniqueId(),
        language: '',
    },
    {
        id:       uniqueId(),
        language: '',
    },
];

export const languageFieldsSlice = createSlice<types.LanguageFieldsState, typeof reducers>({
    name: 'languageFields',
    initialState,
    reducers,
});

export const sliceName = languageFieldsSlice.name;
export const languageFieldsActions = languageFieldsSlice.actions;
export default languageFieldsSlice.reducer;
