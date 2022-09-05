// Core
import { debounce } from 'lodash';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { contactFieldsActions } from './slice';

// Constant
import { WAIT_TIME } from '../../../init';
import { Contact } from './types';

export const useContactField = () => {
    const dispatch = useDispatch();
    const contactFields = useSelector(({ contactFields }) => contactFields);

    const debounceChangeContactField = debounce((contact: Contact) => {
        dispatch(contactFieldsActions.contactFieldCreatorAction({ type: 'url', value: contact }));
    }, WAIT_TIME);

    const removeContactField = (id: string) => {
        dispatch(contactFieldsActions.removeContactField(id));
    };

    return {
        contactFields,
        debounceChangeContactField,
        removeContactField,
    };
};

