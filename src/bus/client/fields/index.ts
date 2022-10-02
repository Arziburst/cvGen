// Slice
import { fieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Data
import { languageData } from './data';

export const useFields = () => {
    const fields = useSelector(({ fields }) => fields);
    const dispatch = useDispatch();
    console.log(languageData);

    const testFieldFunc = (fieldName: keyof typeof initialState) => {
        dispatch(fieldsActions.addField({ type: fieldName, data: languageData }));
    };

    return {
        fields,
        testFieldFunc,
    };
};
