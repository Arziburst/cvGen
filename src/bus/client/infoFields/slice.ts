// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = {
    avatar:   '',
    name:     '',
    position: 'Front-end React developer',
    overview: 'I started out as a creating responsive website and soon started taking on ReactJS, Redux and Typescript. I have a strong background in create responsive layout and user ui. I am proficient in JavaScript, CSS, HTML. I am also skilled at using Git. I’m always working towards updating my skills and keeping up with the industry.This is why I’ve recently started taking Next.js. So, I love the experience.',
};

export const infoFieldsSlice = createSlice<types.InfoFieldsState, typeof reducers>({
    name: 'infoFields',
    initialState,
    reducers,
});

export const sliceName = infoFieldsSlice.name;
export const infoFieldsActions = infoFieldsSlice.actions;
export default infoFieldsSlice.reducer;
