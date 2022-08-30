// Core
import React, { ChangeEvent, FC } from 'react';
import { AppInput, Title } from '../../elements';

// Bus

// Styles
import * as S from './styles';

// Types
import { descriptionList, experienceItem } from '../../../bus/client/types';

type voidFunc = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => void;
type PropTypes = {
    experience: Array<experienceItem>;
    handleChangePosition: voidFunc;
    handleChangeLocation: voidFunc;
    handleChangeDate: voidFunc;
    handleDescription: (event: ChangeEvent<HTMLInputElement>, descrItem: descriptionList) => void;
}

export const Experience: FC<PropTypes> = (props) => {
    const {
        experience,
        handleChangeDate,
        handleChangeLocation,
        handleChangePosition,
        handleDescription,
    } = props;

    return (
        <S.Container>
            <Title text = 'Experience'/>
            <S.Inner>
                {experience.map((experience) => (
                    <S.Box key = { experience.id }>
                        <S.Info>
                            <AppInput
                                defaultValue = { experience.position }
                                handleChangeFunc = { (event) => handleChangePosition(event, experience) }
                                placeholder = 'Your position'
                            />
                            <AppInput
                                defaultValue = { experience.location }
                                handleChangeFunc = { (event) => handleChangeDate(event, experience) }
                                placeholder = 'Sept. 2016 - Present'
                            />
                        </S.Info>
                        <AppInput
                            defaultValue = { experience.location }
                            handleChangeFunc = { (event) => handleChangeLocation(event, experience) }
                            placeholder = 'Your location'
                        />
                        <S.List>
                            {experience.descriptionList.map((description) => (
                                <S.Item key = { description.id }>
                                    <AppInput
                                        defaultValue = { description.description }
                                        handleChangeFunc = { (event) => handleDescription(event, { ...description }) }
                                        placeholder = 'Your descr'
                                    />
                                </S.Item>
                            ))}
                        </S.List>
                    </S.Box>
                ))}
            </S.Inner>
        </S.Container>
    );
};
