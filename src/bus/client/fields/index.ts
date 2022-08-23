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
type Options = { type: fieldsKeys, value: string | object };
type inputFields = {id: string; url: string}
type OptionsField = { type: fieldsKeys, value: inputFields };

// Slice
export const fieldsSlice = createSlice({
    name:     'fields',
    initialState,
    reducers: {
        fieldsCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetfieldsToInitialAction: () => initialState,
        removeContactsItem:         (state, action: PayloadAction<Options>) => {
            return {
                ...state,
                contacts: state.contacts.filter((elem) => action.payload.value !== elem.id),
            };
        },
        changeContactField: (state, action: PayloadAction<OptionsField>) => {
            return {
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
            };
        },
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
        removeContactsItem:   (id: string) => void dispatch(fieldsActions.removeContactsItem({ type: 'contacts', value: id })),
        changeContactsField:  (obj: inputFields) => void dispatch(fieldsActions.changeContactField({ type: 'contacts', value: obj })),
        resetFieldsToInitial: () => void dispatch(fieldsActions.resetfieldsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const fieldsCreatorAction = fieldsActions.fieldsCreatorAction;
