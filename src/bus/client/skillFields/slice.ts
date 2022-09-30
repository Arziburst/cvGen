// Core
import { uniqueId } from 'lodash';

// Slice
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:    uniqueId(),
        skill: '',
    },
    {
        id:    uniqueId(),
        skill: '',
    },
    {
        id:    uniqueId(),
        skill: '',
    },
];

export const skillsSlice = createSlice<types.SkillsState, typeof reducers>({
    name: 'skillFields',
    initialState,
    reducers,
});

export const sliceName = skillsSlice.name;
export const skillsActions = skillsSlice.actions;
export default skillsSlice.reducer;
