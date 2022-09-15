// Core
import React, { FC } from 'react';
import storage from 'redux-persist/lib/storage';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';
import { useContactField } from '../../../bus/client/contactFields';
import { useInfoFields } from '../../../bus/client/infoFields';
import { useAwardFields } from '../../../bus/client/awardFields';
import { useEducationField } from '../../../bus/client/educationFields';
import { useLanguageFields } from '../../../bus/client/languageFields';
import { useSkillFields } from '../../../bus/client/skillFields';

// Components
import {
    ErrorBoundary,
    ConstructorAvatar,
    ConstructorInfo,
    ConstructorContacts,
    ConstructorLanguages,
    ConstructorAward,
    ConstructorEducation,
    ConstructorExperience,
    ConstructorSkills,
} from '../../components';

// Assets
import { svgResetIcon, svgPdfIcon } from '../../../assets/images';

// Constant
import { PERSIST_KEY } from '../../../init';

// Styles
import * as S from './styles';
import { useExperienceFields } from '../../../bus/client/experienceFields';

const Constructor: FC = () => {
    const { setToggleAction } = useTogglesRedux();
    const { resetContactFieldsToInithialState } = useContactField();
    const { resetInfoFieldsToInithial } = useInfoFields();
    const { resetAwardFieldsToInithialState } = useAwardFields();
    const { resetEducationFieldsToInithialState } = useEducationField();
    const { resetLanguageFieldsToInithialState } = useLanguageFields();
    const { resetSkillFieldsToInithialState } = useSkillFields();
    const { resetExperienceFieldsToInithialState } = useExperienceFields();

    return (
        <>
            <S.BtnActionBox>
                <S.ActionBoxContainer>
                    <button
                        onClick = { () => {
                            setToggleAction({ type: 'isReadyPreview', value: true });
                            storage.removeItem(`persist:${PERSIST_KEY}`);
                        } }>
                        <img src = { svgPdfIcon } />
                        <span>Preview</span>
                    </button>
                    <button
                        onClick = { () => {
                            resetContactFieldsToInithialState();
                            resetInfoFieldsToInithial();
                            resetAwardFieldsToInithialState();
                            resetEducationFieldsToInithialState();
                            resetLanguageFieldsToInithialState();
                            resetSkillFieldsToInithialState();
                            resetExperienceFieldsToInithialState();
                        } }>
                        <img src = { svgResetIcon } />
                        <span>Reset</span>
                    </button>
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
                        <ConstructorAward />
                    </S.SecondColumn>
                    <S.SecondColumn>
                        <ConstructorEducation />
                        <ConstructorSkills />
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
