// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = {
    languages: null,
};

export const fieldsSlice = createSlice<types.FieldsState, typeof reducers>({
    name: 'fields',
    initialState,
    reducers,
});

export const sliceName = fieldsSlice.name;
export const fieldsActions = fieldsSlice.actions;
export default fieldsSlice.reducer;
