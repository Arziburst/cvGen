// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = [
    {
        id:          'mail',
        url:         'dimaponomarenko@gmail.com',
        placeholder: 'youremail@gmail.com',
    },
    {
        id:          'phone',
        url:         '+380993523741',
        placeholder: '+380 88 88 88 888',
    },
    {
        id:          'adress',
        url:         'Ukraine, Zaporizhia. Charivna street',
        placeholder: 'Ukraine, Zaporizhia. Charivna street 50',
    },
    {
        id:          'Linkedin',
        url:         'https://www.linkedin.com/in/dimaponomart683/',
        placeholder: 'Linkedin.com/in/yourname',
    },
    {
        id:          'Github',
        url:         'https://github.com/SeniorDmitriy',
        placeholder: 'github.com/YourName',
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
