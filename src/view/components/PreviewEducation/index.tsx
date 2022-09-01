// Core
import React, { FC } from 'react';

// Bus
import { educationItem, inputVoidFunc, textareaVoidFunc } from '../../../bus/client/types';

// Elements
import { AppTextarea, AppInput, Title } from '../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    educations: Array<educationItem>;
    handleChangeDateField: inputVoidFunc;
    handleChangeDegreeField: inputVoidFunc;
    handleChangeDescriptionField: textareaVoidFunc;
}

export const PreviewEducation: FC<PropTypes> = (props) => {
    const {
        educations, handleChangeDateField,
        handleChangeDegreeField, handleChangeDescriptionField,
    } = props;

    return (
        <S.Container>
            <Title text = 'Education'/>
            <S.List>
                {educations.map((education) => {
                    const {
                        date, degree,
                        description, id,
                    } = education;

                    return (
                        <S.Item key = { id }>
                            <S.Date>
                                <AppInput
                                    defaultValue = { date }
                                    handleChangeFunc = { handleChangeDateField }
                                    placeholder = '2007 - 2013'
                                />
                            </S.Date>
                            <S.Degree>
                                <AppInput
                                    defaultValue = { degree }
                                    handleChangeFunc = { handleChangeDegreeField }
                                    placeholder = 'Degree name / University Location'
                                />
                            </S.Degree>
                            <S.Description>
                                <AppTextarea
                                    defaultValue = { description }
                                    handleChangeFunc = { handleChangeDescriptionField }
                                    placeholder = 'Tell about your degree'
                                />
                            </S.Description>
                        </S.Item>
                    );
                })}
            </S.List>
        </S.Container>
    );
};
