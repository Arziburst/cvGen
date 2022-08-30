// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
import { contactItem } from '../types';

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
type contactFieldKeys = 'contactsFields';
type Options = { type: contactFieldKeys, value: string };

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
        setContactField: (state, action: PayloadAction<OptionsContactsField>) => {
            return [
                ...state.map((elem) => {
                    if (elem.id === action.payload.value.id) {
                        return {
                            ...elem,
                            url: action.payload.value.url,
                        };
                    }

                    return elem;
                }),
            ];
        },

        removeContactField: (state, action: PayloadAction<Options>) => {
            return [ ...state.filter((contact) => contact.id !== action.payload.value) ];
        },

        resetContactFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const contactFieldActions = contactFieldSlice.actions;
export default contactFieldSlice.reducer;

const useContactFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        contactFieldRedux:     useSelector(({ contactFields }) => contactFields),
        setContactFieldAction: (options: Options) => {
            dispatch(contactFieldActions.contactFieldCreatorAction(options));
        },
        setContactField: (options: OptionsContactsField) => {
            dispatch(contactFieldActions.setContactField(options));
        },
        removeContactField: (options: Options) => {
            dispatch(contactFieldActions.removeContactField(options));
        },
        resetContactFieldToInitial: () => void dispatch(contactFieldActions.resetContactFieldToInitialAction()),
    };
};

export const useContactHooksRedux = () => {
    const { contactFieldRedux, removeContactField, setContactField } = useContactFieldRedux();

    const debounceChangeContactField = debounce((text: contactItem) => {
        setContactField({ type: 'contactsFields', value: text });
    }, 300);

    const debounceRemoveContactField = debounce((id: string) => {
        removeContactField({ type: 'contactsFields', value: id });
    }, 100);

    return {
        contactFieldRedux,
        debounceRemoveContactField,
        debounceChangeContactField,
    };
};


export const contactFieldCreatorAction = contactFieldActions.contactFieldCreatorAction;
