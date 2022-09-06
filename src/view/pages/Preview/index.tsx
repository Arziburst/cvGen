// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Components
import { ErrorBoundary, PreviewAvatar, PreviewInfo, PreviewContacts } from '../../components';

// Styles
import * as S from './styles';
import { PreviewLanguages } from '../../components/PreviewLanguages';
import { PreviewExperience } from '../../components/PreviewExperience';
import { PreviewEducation } from '../../components/PreviewEducation';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    return (
        <S.Container>
            <S.Wrapper>
                <S.Column>
                    <PreviewAvatar />
                </S.Column>
                <S.Column>
                    <PreviewInfo />
                </S.Column>
            </S.Wrapper>
            <S.Wrapper>
                <S.SecondColumn>
                    <PreviewContacts />
                    <PreviewLanguages />
                </S.SecondColumn>
                <S.SecondColumn>
                    <PreviewEducation />
                    <PreviewExperience />
                </S.SecondColumn>
            </S.Wrapper>
            <button
                style = {{ position: 'absolute', left: '15px', right: '15px', width: '80px', height: '100px' }}
                onClick = { () => {
                    setToggleAction({ type: 'isReadyCV', value: true });
                } }>
                Gen cv
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
