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
        date:        '2007 - 2013',
        degree:      'Degree Name / University, Location',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
