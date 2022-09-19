//Slice
import { initialState, skillsActions } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';
import { Skill } from './types';
import { uniqueId } from 'lodash';

export const useSkillFields = () => {
    const skillFields = useSelector(({ skillFields }) => skillFields);
    const dispatch = useDispatch();

    const handleChangeSkillField = (data: Skill) => {
        dispatch(skillsActions.skillActionCreator({ type: 'skill', data }));
    };

    const removeSkillField = (id: string) => {
        dispatch(skillsActions.removeSkill(id));
    };

    const addSkillField = () => {
        dispatch(skillsActions.addSkill(uniqueId()));
    };

    const resetSkillFieldsToInithialState = () => {
        dispatch(skillsActions.resetSkillFields(initialState));
    };

    return {
        skillFields,
        handleChangeSkillField,
        removeSkillField,
        addSkillField,
        resetSkillFieldsToInithialState,
    };
};
