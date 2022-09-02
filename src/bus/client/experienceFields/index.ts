// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce, uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
import { descriptionList, experienceItem, project } from '../types';

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
        ],
        projects: [
            {
                id:               uniqueId(),
                name:             'Ukrainian news site',
                customer:         'Ukraine',
                duration:         '7 (January 2020 - Jule 2020)',
                role:             'Front-end developer',
                responsibilities: 'Create responsive and adaptive SEO frendly website. It great project wherein i use new adaptive approaches and custom grid container Also use optimization modern format images, fonts, icons.',
                teamSize:         '5',
                stack:            'html, css3, sass, jquery, js, gulp, bem methodology',
            },
        ],
    },
];

// Types
type experienceFieldKeys = keyof typeof initialState[0];
type Options = { type: experienceFieldKeys, value: experienceItem };
type OptionsSecond = { type: experienceFieldKeys, value: string };
type OptionsProjectsSecond = { type: experienceFieldKeys, value: project };
type OptionsExperienceField = { type: experienceFieldKeys, value: descriptionList };

// Slice
export const experienceFieldSlice = createSlice({
    name:     'experienceField',
    initialState,
    reducers: {
        experienceFieldCreatorAction: (state, action: PayloadAction<Options>) => state.map((experience) => {
            if (experience.id === action.payload.value.id) {
                return {
                    ...experience,
                    [ action.payload.type ]: action.payload.value[ action.payload.type ],
                };
            }

            return experience;
        }),
        removeExperienceField: (state, action: PayloadAction<OptionsSecond>) => [ // TODO and same situations
            ...state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: experience.descriptionList.filter(
                        (descItem) => descItem.id !== action.payload.value,
                    ),
                };
            }),
        ],
        removeExperienceProjectField: (state, action: PayloadAction<OptionsSecond>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    projects: experience.projects.filter((project) => project.id !== action.payload.value),
                };
            }),
        ],
        addExperienceField: (state, action: PayloadAction<OptionsSecond>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: [
                        ...experience.descriptionList,
                        {
                            id:          action.payload.value,
                            description: '',
                        },
                    ],
                };
            }),
        ],
        addExperienceProjectField: (state, action: PayloadAction<OptionsSecond>) => state.map((experience) => {
            return {
                ...experience,
                projects: [
                    ...experience.projects,
                    {
                        id:               action.payload.value,
                        customer:         '',
                        duration:         '',
                        name:             '',
                        responsibilities: '',
                        role:             '',
                        stack:            '',
                        teamSize:         '',
                    },
                ],
            };
        }),
        setExperienceDescrField: (state, action: PayloadAction<OptionsExperienceField>) => state.map((experience) => {
            return {
                ...experience,
                descriptionList: experience.descriptionList.map((descr) => {
                    if (descr.id === action.payload.value.id) {
                        return {
                            ...descr,
                            description: action.payload.value.description,
                        };
                    }

                    return descr;
                }),
            };
        }),
        setExperienceProjectsField: (state, action: PayloadAction<OptionsProjectsSecond>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    projects: experience.projects.map((project) => {
                        if (project.id === action.payload.value.id) {
                            return {
                                ...project,
                                ...action.payload.value,
                            };
                        }

                        return project;
                    }),
                };
            }),
        ],
        resetExperienceFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const experienceFieldActions = experienceFieldSlice.actions;
export default experienceFieldSlice.reducer;

const useExperienceFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        experienceFieldRedux:     useSelector(({ experienceFields }) => experienceFields),
        setExperienceFieldAction: (options: Options) => {
            dispatch(experienceFieldActions.experienceFieldCreatorAction(options));
        },
        setExperienceDescrField: (options: OptionsExperienceField) => {
            dispatch(experienceFieldActions.setExperienceDescrField(options));
        },
        setExperienceProjectField: (options: OptionsProjectsSecond) => {
            dispatch(experienceFieldActions.setExperienceProjectsField(options));
        },
        removeExperienceDescrField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.removeExperienceField(options));
        },
        removeExperienceProjectField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.removeExperienceProjectField(options));
        },
        addExperienceDescrField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.addExperienceField(options));
        },
        addExperienceProjectField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.addExperienceProjectField(options));
        },
        // eslint-disable-next-line max-len
        resetExperienceFieldToInitial: () => void dispatch(experienceFieldActions.resetExperienceFieldToInitialAction()),
    };
};

export const useExperienceHooksRedux = () => {
    const {
        experienceFieldRedux, setExperienceDescrField,
        setExperienceFieldAction, removeExperienceDescrField,
        addExperienceDescrField, setExperienceProjectField,
        removeExperienceProjectField, addExperienceProjectField,
    } = useExperienceFieldRedux();

    const debounceChangeExperienceFieldAction = debounce((experience: experienceItem, type: Options['type']) => {
        setExperienceFieldAction({ type, value: experience });
    }, 300);

    const debounceChangeProjectsFieldAction = debounce((experience: project) => {
        setExperienceProjectField({ type: 'projects', value: experience });
    }, 300);

    const debounceChangeExperienceDescrField = debounce((description: descriptionList) => {
        setExperienceDescrField({ type: 'descriptionList', value: description });
    }, 300);

    const debounceRemoveExperienceDescrField = debounce((id: string) => {
        removeExperienceDescrField({ type: 'descriptionList', value: id });
    }, 100);

    const debounceRemoveExperienceProjectField = debounce((id: string) => {
        removeExperienceProjectField({ type: 'projects', value: id });
    }, 100);

    const debounceAddExperienceDescrField = debounce(() => {
        addExperienceDescrField({ type: 'descriptionList', value: uniqueId() });
    }, 100);

    const debounceAddExperienceProjectField = debounce(() => {
        addExperienceProjectField({ type: 'projects', value: uniqueId() });
    }, 100);

    return {
        experienceFieldRedux,
        debounceChangeExperienceFieldAction,
        debounceChangeExperienceDescrField,
        debounceRemoveExperienceDescrField,
        debounceAddExperienceDescrField,
        debounceChangeProjectsFieldAction,
        debounceRemoveExperienceProjectField,
        debounceAddExperienceProjectField,
    };
};

export const experienceFieldCreatorAction = experienceFieldActions.experienceFieldCreatorAction;
