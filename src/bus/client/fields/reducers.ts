import * as types from './types';

export const addFieldBlock: types.BaseContact<types.FieldOptions> = (state, action) => {
    const field = state[ action.payload.type ];

    if (field === null) {
        return {
            ...state,
            [ action.payload.type ]: action.payload.data,
        };
    }

    return state;
};

export const removeFieldBlock: types.BaseContact<types.FieldsType> = (state, action) => {
    const field = state[ action.payload ];

    if (field !== null) {
        return {
            ...state,
            [ action.payload ]: null,
        };
    }

    return state;
};

export const changeFieldText: types.BaseContact<types.FieldData> = (state, action) => {
    const field = state[ action.payload.type ];

    if (field !== null) {
        return {
            ...state,
            [ action.payload.type ]: {
                ...field,
                items: field.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            text: action.payload.data,
                        };
                    }

                    return item;
                }),
            },
        };
    }

    return state;
};

export const removeFieldInBlock: types.BaseContact<types.FieldRemoveOptions> = (state, action) => {
    const field = state[ action.payload.type ];

    if (field?.items.length === 1) {
        return {
            ...state,
            [ action.payload.type ]: null,
        };
    }

    if (field !== null) {
        return {
            ...state,
            [ action.payload.type ]: {
                ...field,
                items: field.items.filter((item) => item.id !== action.payload.id),
            },
        };
    }

    return state;
};

export const addFieldInBlock: types.BaseContact<types.FieldAddOptions> = (state, action) => {
    const field = state[ action.payload.type ];

    if (field !== null) {
        return {
            ...state,
            [ action.payload.type ]: {
                ...field,
                items: [
                    ...field.items,
                    {
                        ...action.payload.data,
                    },
                ],
            },
        };
    }

    return state;
};

