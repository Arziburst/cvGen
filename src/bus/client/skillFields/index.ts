//Slice
import { skillsActions } from './slice';

// Tools
import { useDebounce, useSelector, useDispatch } from '../../../tools/hooks';
import { Skill } from './types';
import { uniqueId } from 'lodash';

export const useSkills = () => {
    const skills = useSelector(({ skillFields }) => skillFields);
    const debounce = useDebounce();
    const dispatch = useDispatch();

    const debounceChangeSkillField = debounce((data: Skill) => {
        dispatch(skillsActions.skillActionCreator({ type: 'skill', data }));
    });

    const removeSkillField = (id: string) => {
        dispatch(skillsActions.removeSkill(id));
    };

    const addSkillField = () => {
        dispatch(skillsActions.addSkill(uniqueId()));
    };

    return {
        skills,
        debounceChangeSkillField,
        removeSkillField,
        addSkillField,
    };
};
