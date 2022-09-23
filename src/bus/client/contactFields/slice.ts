// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:  'mail',
        url: '',
    },
    {
        id:  'phone',
        url: '',
    },
    {
        id:  'address',
        url: '',
    },
    {
        id:  'Linkedin',
        url: '',
    },
    {
        id:  'Github',
        url: '',
    },
];

export const contactFieldsSlice = createSlice<types.ContactsState, typeof reducers>({
    name: 'contactFields',
    initialState,
    reducers,
});

export const sliceName = contactFieldsSlice.name;
export const contactFieldsActions = contactFieldsSlice.actions;
export default contactFieldsSlice.reducer;
