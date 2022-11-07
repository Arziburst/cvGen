// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Containers
import { PdfViewer } from '../../containers/PdfViewer';

// Components
import { ErrorBoundary } from '../../components';

// Style
import * as S from './styles';

const Preview: FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.BtnContainer>
                <S.NavBtn
                    onClick = { () => navigate(-1) }>
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

