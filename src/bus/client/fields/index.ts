// Slice
import { fieldsActions, initialState } from './slice';

// Types
import * as types from './types';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Data
import { uniqueId } from 'lodash';

export const useFields = () => {
    const fields = useSelector(({ fields }) => fields);
    const dispatch = useDispatch();

    const addFieldBlock = ({ type, data }: types.FieldOptions) => {
        dispatch(fieldsActions.addFieldBlock({ type, data }));
    };

    const removeFieldBlock = (fieldName: keyof typeof initialState) => {
        dispatch(fieldsActions.removeFieldBlock(fieldName));
    };

    const changeFieldTextInBlock = ({ type, data, id }: types.FieldData) => {
        dispatch(fieldsActions.changeFieldText({ type, data, id }));
    };

    const removeFieldInBlock = ({ type, id }: types.FieldRemoveOptions) => {
        dispatch(fieldsActions.removeFieldInBlock({ type, id }));
    };

    const addFieldInBlock = ({ type, data }: types.FieldAddOptions) => {
        dispatch(fieldsActions.addFieldInBlock({ data: { ...data, id: uniqueId() }, type }));
    };

    const resetSkillsLanguages = () => {
        dispatch(fieldsActions.resetSkillsLangugagesFeilds());
    };

    return {
        fields,
        addFieldBlock,
        removeFieldBlock,
        changeFieldTextInBlock,
        removeFieldInBlock,
        addFieldInBlock,
        resetSkillsLanguages,
        // changeFieldEducationInBlock,
    };
};
