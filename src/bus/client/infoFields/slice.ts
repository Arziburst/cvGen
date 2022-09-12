// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = {
    avatar:   '',
    name:     '',
    position: '',
    overview: '',
};

export const infoFieldsSlice = createSlice<types.InfoFieldsState, typeof reducers>({
    name: 'infoFields',
    initialState,
    reducers,
});

export const sliceName = infoFieldsSlice.name;
export const infoFieldsActions = infoFieldsSlice.actions;
export default infoFieldsSlice.reducer;
