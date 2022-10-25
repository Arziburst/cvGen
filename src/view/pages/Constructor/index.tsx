// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';
import { useContactField } from '../../../bus/client/contactFields';
import { useInfoFields } from '../../../bus/client/infoFields';
import { useFields } from '../../../bus/client/fields';
// import { useAwardFields } from '../../../bus/client/awardFields';
import { useExperienceFields } from '../../../bus/client/experienceFields';
import { useEducationField } from '../../../bus/client/educationFields';

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
    // const { resetAwardFieldsToInithialState } = useAwardFields();
    const { resetEducationFieldsToInithialState } = useEducationField();
    const { resetExperienceFields } = useExperienceFields();
    const { resetSkillsLanguages } = useFields();

    return (
        <>
            <S.BtnActionBox>
                <S.ActionBoxContainer>
                    <Logo />
                    <S.BtnBox>
                        <Palette />
                        <S.BtnBoxBtn
                            onClick = { () => {
                                // eslint-disable-next-line no-alert
                                const ifConfirtm = confirm('Are you sure you want to reset all fields to their default values?');

                                if (ifConfirtm) {
                                    resetContactFieldsToInithialState();
                                    resetInfoFieldsToInithial();
                                    resetEducationFieldsToInithialState();
                                    resetExperienceFields();
                                    resetSkillsLanguages();
                                }
                            } }>
                            <S.SvgIcon src = { svgResetIcon } />
                            <span>Reset</span>
                        </S.BtnBoxBtn>
                    </S.BtnBox>
                </S.ActionBoxContainer>
            </S.BtnActionBox>
            <S.Container>
                <S.PreviewBtn onClick = { () => {
                    setToggleAction({ type: 'isPreview', value: true });
                } }>
                    <S.SvgIcon src = { svgPdfIcon } />
                    <span>Preview</span>
                </S.PreviewBtn>
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
