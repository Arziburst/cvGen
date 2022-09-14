// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';
import { useContactField } from '../../../bus/client/contactFields';

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
import storage from 'redux-persist/lib/storage';

const Constructor: FC = () => {
    const { setToggleAction } = useTogglesRedux();
    const { resetContactFields } = useContactField();

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
                        id = 'resetBtn'
                        onClick = { () => {
                        // localStorage.removeItem('persist:' + PERSIST_KEY);
                            resetContactFields();
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
