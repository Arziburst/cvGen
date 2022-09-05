// Tools
import { useSelector } from '../../../tools/hooks';

export const useExperienceFields = () => {
    const experienceFields = useSelector(({ experienceFields }) => experienceFields);

    return {
        experienceFields,
    };
};
