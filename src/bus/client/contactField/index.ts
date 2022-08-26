// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

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

// Types
export type contactFieldKeys = keyof typeof initialState;
type Options = { type: contactFieldKeys, value: string };

export type contactItem = {
    id: string;
    url: string;
    placeholder: string;
}

type OptionsContactsField = { type: contactFieldKeys, value: contactItem };

// Slice
export const contactFieldSlice = createSlice({
    name:     'contactField',
    initialState,
    reducers: {
        contactFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setContactsField: (state, action: PayloadAction<OptionsContactsField>) => ({
            ...state,
            contacts: state.map((elem) => {
                if (elem.id === action.payload.value.id) {
                    return {
                        ...elem,
                        url: action.payload.value.url,
                    };
                }

                return elem;
            }),
        }),
        resetContactFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const contactFieldActions = contactFieldSlice.actions;
export default contactFieldSlice.reducer;

export const useContactFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        contactFieldRedux:     useSelector(({ contactField }) => contactField),
        setContactFieldAction: (options: Options) => {
            dispatch(contactFieldActions.contactFieldCreatorAction(options));
        },
        setContactField: (options: OptionsContactsField) => {
            dispatch(contactFieldActions.setContactsField(options));
        },
        resetContactFieldToInitial: () => void dispatch(contactFieldActions.resetContactFieldToInitialAction()),
    };
};

export const contactFieldCreatorAction = contactFieldActions.contactFieldCreatorAction;
