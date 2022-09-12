// Core
import { uniqueId } from 'lodash';

// Slice
import { awardFieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch, useDebounce } from '../../../tools/hooks';

// Types
import { AwardData } from './types';

export const useAwardFields = () => {
    const dispatch = useDispatch();
    const debounce = useDebounce();
    const awardFields = useSelector(({ awardFields }) => awardFields);

    const debounceChangeAwardReceivedField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'received', value: data }));
    });

    const debounceChangeAwardDateField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'date', value: data }));
    });

    const debounceChangeAwardLocationField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'location', value: data }));
    });

    const removeAwardField = (id: string) => {
        dispatch(awardFieldsActions.removeAwardFields(id));
    };

    const createAwardField = () => {
        dispatch(awardFieldsActions.addAwardFields({ ...initialState[ 0 ], id: uniqueId() }));
    };

    return {
        awardFields,
        debounceChangeAwardReceivedField,
        debounceChangeAwardDateField,
        debounceChangeAwardLocationField,
        removeAwardField,
        createAwardField,
    };
};
