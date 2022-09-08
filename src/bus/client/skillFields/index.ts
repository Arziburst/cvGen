// Tools
import { useSelector } from '../../../tools/hooks';

export const useSkills = () => {
    const skills = useSelector(({ skillFields }) => skillFields);

    return {
        skills,
    };
};
