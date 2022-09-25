// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Containers
import { PdfViewer } from '../../containers/PdfViewer';

// Components
import { ErrorBoundary } from '../../components';

// Style
import * as S from './styles';

const Preview: FC = () => {
    const { setToggleAction } = useTogglesRedux();


    return (
        <S.Container>
            <S.BtnContainer>
                <S.NavBtn
                    onClick = { () => {
                        setToggleAction({ type: 'isPreview', value: false });
                    } }>
                    Back to constructor
                </S.NavBtn>
            </S.BtnContainer>
            <PdfViewer />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Preview />
    </ErrorBoundary>
);

