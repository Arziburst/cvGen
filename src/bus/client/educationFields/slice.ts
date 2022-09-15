// Core
import { uniqueId } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:          uniqueId(),
        date:        '',
        degree:      '',
        description: '',
    },
];

export const educationFieldsSlice = createSlice<types.EducationState, typeof reducers>({
    name: 'educationFields',
    initialState,
    reducers,
});

export const sliceName = educationFieldsSlice.name;
export const educationFieldsActions = educationFieldsSlice.actions;
export default educationFieldsSlice.reducer;
