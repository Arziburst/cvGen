// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce, uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
import { descriptionList, experienceItem } from '../types';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = [
    {
        id:              uniqueId(),
        position:        '',
        location:        '',
        date:            '',
        descriptionList: [
            {
                id:          uniqueId(),
                description: '',
            },
            {
                id:          uniqueId(),
                description: '',
            },
            {
                id:          uniqueId(),
                description: '',
            },
        ],
    },
];

// Types
type experienceFieldKeys = 'experienceFields';
type Options = { type: experienceFieldKeys, value: string };
type OptionsExperienceField = { type: experienceFieldKeys, value: experienceItem };
type OptionsExperienceDescrField = { type: experienceFieldKeys, value: descriptionList };

// Slice
export const experienceFieldSlice = createSlice({
    name:     'experienceField',
    initialState,
    reducers: {
        experienceFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setExperienceField: (state, action: PayloadAction<OptionsExperienceField>) => ({
            ...state,
            experience: state.map((experience) => {
                if (experience.id === action.payload.value.id) {
                    return {
                        ...experience,
                        ...action.payload.value,
                    };
                }

                return experience;
            }),
        }),
        setExperienceDescrField: (state, action: PayloadAction<OptionsExperienceDescrField>) => ({
            ...state,
            experience: state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: [
                        ...experience.descriptionList.map((descr) => {
                            if (descr.id === action.payload.value.id) {
                                return {
                                    ...descr,
                                    description: action.payload.value.description,
                                };
                            }

                            return descr;
                        }),
                    ],
                };
            }),
        }),

        resetExperienceFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const experienceFieldActions = experienceFieldSlice.actions;
export default experienceFieldSlice.reducer;

const useExperienceFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        experienceFieldRedux: useSelector(({ experienceFields }) => experienceFields),
        setExperienceField:   (options: OptionsExperienceField) => {
            dispatch(experienceFieldActions.setExperienceField(options));
        },
        setExperienceDescrField: (options: OptionsExperienceDescrField) => {
            dispatch(experienceFieldActions.setExperienceDescrField(options));
        },
        resetExperienceFieldToInitial: () => {
            dispatch(experienceFieldActions.resetExperienceFieldToInitialAction());
        },
    };
};


export const useExperienceHooksRedux = () => {
    const { experienceFieldRedux, setExperienceField, setExperienceDescrField } = useExperienceFieldRedux();

    const debounceChangeExperienceField = debounce((experience: experienceItem) => {
        setExperienceField({ type: 'experienceFields', value: experience });
    }, 300);

    const debounceChangeExperienceDescrField = debounce((experience: descriptionList) => {
        setExperienceDescrField({ type: 'experienceFields', value: experience });
    }, 300);

    return {
        experienceFieldRedux,
        debounceChangeExperienceField,
        debounceChangeExperienceDescrField,
    };
};

export const experienceFieldCreatorAction = experienceFieldActions.experienceFieldCreatorAction;
