// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce, uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
// import { educationItem } from '../types';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = [
    {
        id:          uniqueId(),
        date:        '2007 - 2013',
        degree:      'Degree Name / University, Location',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

// Types
type educationFieldKeys = keyof typeof initialState[0];
type Options = { type: educationFieldKeys, value: string };

// type OptionsEducationField = { type: educationFieldKeys, value: educationItem };

// Slice
export const educationFieldSlice = createSlice({
    name:     'educationField',
    initialState,
    reducers: {
        educationFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),

        removeEducationField: (state, action: PayloadAction<Options>) => {
            return [ ...state.filter((education) => education.id !== action.payload.value) ];
        },

        addEducationField: (state, action: PayloadAction<Options>) => {
            return [
                ...state.map(() => {
                    return {
                        id:          action.payload.value,
                        date:        '',
                        degree:      '',
                        description: '',
                    };
                }),
            ];
        },

        resetEducationFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const educationFieldActions = educationFieldSlice.actions;
export default educationFieldSlice.reducer;

const useEducationFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        educationFieldRedux:     useSelector(({ educationFields }) => educationFields),
        setEducationFieldAction: (options: Options) => {
            dispatch(educationFieldActions.educationFieldCreatorAction(options));
        },
        removeEducationField: (options: Options) => {
            dispatch(educationFieldActions.removeEducationField(options));
        },
        addEducationField: (options: Options) => {
            dispatch(educationFieldActions.addEducationField(options));
        },
        resetEducationFieldToInitial: () => void dispatch(educationFieldActions.resetEducationFieldToInitialAction()),
    };
};

export const useEducationHooksRedux = () => {
    const {
        educationFieldRedux, removeEducationField,
        setEducationFieldAction, addEducationField,
    } = useEducationFieldRedux();

    const debounceChangeDateField = debounce((text: string) => {
        setEducationFieldAction({ type: 'date', value: text });
    }, 300);

    const debounceChangeDegreeField = debounce((text: string) => {
        setEducationFieldAction({ type: 'degree', value: text });
    }, 300);

    const debounceChangeDescriptionField = debounce((text: string) => {
        setEducationFieldAction({ type: 'description', value: text });
    }, 300);

    const debounceRemoveEducationField = debounce((id: string) => {
        removeEducationField({ type: 'id', value: id });
    }, 100);

    const debounceAddEducationField = debounce(() => {
        addEducationField({ type: 'id', value: uniqueId() });
    }, 100);

    return {
        educationFieldRedux,
        debounceChangeDateField,
        debounceChangeDegreeField,
        debounceChangeDescriptionField,
        debounceRemoveEducationField,
        debounceAddEducationField,
    };
};


export const EducationFieldCreatorAction = educationFieldActions.educationFieldCreatorAction;
