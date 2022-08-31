// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { AppInput, AppTextarea, RemoveBtn, Title } from '../../elements';

// Types
import { descriptionList, experienceItem } from '../../../bus/client/types';

type voidFunc = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => void;
type PropTypes = {
    experience: Array<experienceItem>;
    handleChangePosition: voidFunc;
    handleChangeLocation: voidFunc;
    handleChangeDate: voidFunc;
    removeDescrField: (id: string) => void;
    handleDescription: (event: ChangeEvent<HTMLTextAreaElement>, descrItem: descriptionList) => void;
}

export const Experience: FC<PropTypes> = (props) => {
    const {
        experience,
        handleChangeDate,
        handleChangeLocation,
        handleChangePosition,
        handleDescription,
        removeDescrField,
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
                                defaultValue = { experience.date }
                                handleChangeFunc = { (event) => handleChangeDate(event, experience) }
                                placeholder = 'Sept. 2016 - Present'
                            />
                        </S.Info>
                        <S.Location>
                            <AppInput
                                defaultValue = { experience.location }
                                handleChangeFunc = { (event) => handleChangeLocation(event, experience) }
                                placeholder = 'Your location'
                            />
                        </S.Location>
                        <S.List>
                            {experience.descriptionList.map((description) => (
                                <S.Item key = { description.id }>
                                    <AppTextarea
                                        defaultValue = { description.description }
                                        handleChangeFunc = { (event: ChangeEvent<HTMLTextAreaElement>) => {
                                            handleDescription(event, { ...description });
                                        } }
                                        placeholder = 'Your descr'
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeDescrField(description.id) } />
                                </S.Item>
                            ))}
                        </S.List>
                    </S.Box>
                ))}
            </S.Inner>
        </S.Container>
    );
};
