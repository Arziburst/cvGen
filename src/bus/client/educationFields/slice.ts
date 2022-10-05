// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = null;

export const educationFieldsSlice = createSlice<types.EducationState, typeof reducers>({
    name: 'educationFields',
    initialState,
    reducers,
});

export const sliceName = educationFieldsSlice.name;
export const educationFieldsActions = educationFieldsSlice.actions;
export default educationFieldsSlice.reducer;
