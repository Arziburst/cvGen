// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';
import { useContactField } from '../../../bus/client/contactFields';
import { useInfoFields } from '../../../bus/client/infoFields';
import { useAwardFields } from '../../../bus/client/awardFields';
import { useEducationField } from '../../../bus/client/educationFields';
import { useExperienceFields } from '../../../bus/client/experienceFields';

// Elements
import { Logo } from '../../elements';

// Components
import {
    ErrorBoundary,
    ConstructorAvatar,
    ConstructorInfo,
    ConstructorContacts,
    ConstructorLanguages,
    ConstructorEducation,
    ConstructorExperience,
    ConstructorSkills,
    Palette,
} from '../../components';

// Assets
import { svgResetIcon, svgPdfIcon } from '../../../assets/images';

// Styles
import * as S from './styles';

const Constructor: FC = () => {
    const { setToggleAction } = useTogglesRedux();
    const { resetContactFieldsToInithialState } = useContactField();
    const { resetInfoFieldsToInithial } = useInfoFields();
    const { resetAwardFieldsToInithialState } = useAwardFields();
    const { resetEducationFieldsToInithialState } = useEducationField();
    const { resetExperienceFieldsToInithialState } = useExperienceFields();

    return (
        <>
            <S.BtnActionBox>
                <S.ActionBoxContainer>
                    <Logo />
                    <S.BtnBox>
                        <Palette />
                        <S.BtnBoxBtn onClick = { () => {
                            setToggleAction({ type: 'isPreview', value: true });
                        } }>
                            <S.SvgIcon src = { svgPdfIcon } />
                            <span>Preview</span>
                        </S.BtnBoxBtn>
                        <S.BtnBoxBtn
                            onClick = { () => {
                                resetContactFieldsToInithialState();
                                resetInfoFieldsToInithial();
                                resetAwardFieldsToInithialState();
                                resetEducationFieldsToInithialState();
                                resetExperienceFieldsToInithialState();
                            } }>
                            <S.SvgIcon src = { svgResetIcon } />
                            <span>Reset</span>
                        </S.BtnBoxBtn>
                    </S.BtnBox>
                </S.ActionBoxContainer>
            </S.BtnActionBox>
            <S.Container>
                <S.Wrapper>
                    <S.Column>
                        <ConstructorAvatar />
                    </S.Column>
                    <S.Column>
                        <ConstructorInfo />
                    </S.Column>
                </S.Wrapper>
                <S.Wrapper>
                    <S.SecondColumn>
                        <ConstructorContacts />
                        <ConstructorLanguages />
                        {/* <ConstructorAward /> */}
                    </S.SecondColumn>
                    <S.SecondColumn>
                        <ConstructorSkills />
                        <ConstructorEducation />
                        <ConstructorExperience />
                    </S.SecondColumn>
                </S.Wrapper>
            </S.Container>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Constructor />
    </ErrorBoundary>
);
