// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';
import { uniqueId } from 'lodash';

export const initialState = [
    {
        id:       uniqueId(),
        received: '',
        date:     '',
        location: '',
    },
];

export const awardFieldsSlice = createSlice<types.AwardFieldsState, typeof reducers>({
    name: 'awardFields',
    initialState,
    reducers,
});

export const sliceName = awardFieldsSlice.name;
export const awardFieldsActions = awardFieldsSlice.actions;
export default awardFieldsSlice.reducer;
