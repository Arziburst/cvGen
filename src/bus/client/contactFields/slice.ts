// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:  'mail',
        url: 'dimaponomarenko@gmail.com',
    },
    {
        id:  'phone',
        url: '+380993523741',
    },
    {
        id:  'adress',
        url: 'Ukraine, Zaporizhia. Charivna street',
    },
    {
        id:  'Linkedin',
        url: 'https://www.linkedin.com/in/dimaponomart683/',
    },
    {
        id:  'Github',
        url: 'https://github.com/SeniorDmitriy',
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
