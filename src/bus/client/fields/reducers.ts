// Slice
import { initialState } from './slice';
import { find, flow, property, partialRight, some, uniqueId } from 'lodash';
// Types
import * as types from './types';

type FieldOptions = {
    type: keyof typeof initialState;
    data: types.LanguageBlock
}

export const addField: types.BaseContact<FieldOptions> = (state, action) => {
    const field = state[ action.payload.type ];
    const data = find(state, flow(
        property('id'),
        partialRight(some, { id: uniqueId() }),
    ));

    console.log(data);

    if (field === null) {
        return {
            ...state,
            field: action.payload.data,
        };
    }

    return state;
};
