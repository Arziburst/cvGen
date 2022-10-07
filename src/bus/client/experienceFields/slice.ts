// Slice
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = null;

export const experienceFieldsSlice = createSlice<types.ExperienceFieldsState, typeof reducers>({
    name: 'experienceFields',
    initialState,
    reducers,
});

export const sliceName = experienceFieldsSlice.name;
export const experienceFieldsActions = experienceFieldsSlice.actions;
export default experienceFieldsSlice.reducer;
