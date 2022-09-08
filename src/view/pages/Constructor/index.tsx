// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

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

// Styles
import * as S from './styles';

const Constructor: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    return (
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
            <button
                style = {{ position: 'absolute', left: '15px', right: '15px', width: '80px', height: '100px' }}
                onClick = { () => {
                    setToggleAction({ type: 'isReadyPreview', value: true });
                } }>
                Gen cv
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Constructor />
    </ErrorBoundary>
);
