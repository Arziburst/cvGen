// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    avatar:    '',
    firstName: '',
    lastName:  '',
    position:  '',
    overview:  '',
    contacts:  [
        {
            id:          'mail',
            url:         '',
            placeholder: 'youremail@gmail.com',
        },
        {
            id:          'phone',
            url:         '',
            placeholder: '+380 88 88 88 888',
        },
        {
            id:          'adress',
            url:         '',
            placeholder: 'Ukraine, Zaporizhia. Charivna street 50',
        },
        {
            id:          'linkedin',
            url:         '',
            placeholder: 'Linkedin.com/in/yourname',
        },
    ],
};

// Types
export type fieldsKeys = keyof typeof initialState;
type Options = { type: fieldsKeys, value: string };

export type socialItem = {
    id: string;
    url: string;
    placeholder: string;
}

type OptionsContactsField = { type: fieldsKeys, value: socialItem };

// Slice
export const fieldsSlice = createSlice({
    name:     'fields',
    initialState,
    reducers: {
        fieldsCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setContactsField: (state, action: PayloadAction<OptionsContactsField>) => ({
            ...state,
            contacts: state.contacts.map((elem) => {
                if (elem.id === action.payload.value.id) {
                    return {
                        ...elem,
                        url: action.payload.value.url,
                    };
                }

                return elem;
            }),
        }),
        resetfieldsToInitialAction: () => initialState,
    },
});

// Interfaces
const fieldsActions = fieldsSlice.actions;
export default fieldsSlice.reducer;

export const useFieldsRedux = () => {
    const dispatch = useDispatch();

    return {
        fieldsRedux:          useSelector(({ fields }) => fields),
        setFieldsAction:      (options: Options) => void dispatch(fieldsActions.fieldsCreatorAction(options)),
        setContactField:      (options: OptionsContactsField) => void dispatch(fieldsActions.setContactsField(options)),
        resetFieldsToInitial: () => void dispatch(fieldsActions.resetfieldsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const fieldsCreatorAction = fieldsActions.fieldsCreatorAction;
