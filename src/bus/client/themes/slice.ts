// Core
import { createSlice } from '@reduxjs/toolkit';
import { defaultTheme } from '../../../assets';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    ...defaultTheme,
};

export const themesSlice = createSlice<types.Theme, typeof reducers>({
    name: 'themes',
    initialState,
    reducers,
});

export const sliceName = themesSlice.name;
export const themesActions = themesSlice.actions;
export default themesSlice.reducer;
