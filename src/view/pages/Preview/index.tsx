// Core
import React, { FC } from 'react';
// import { Link } from 'react-router-dom';

// // Routes
// import * as book from '../../routes/book';
// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Containers
import { PdfViewer } from '../../containers/PdfViewer';

// Components
import { ErrorBoundary } from '../../components';

// Style
import * as S from './styles';
import { useTheme } from 'styled-components';

const Preview: FC = () => {
    const { setToggleAction } = useTogglesRedux();
    const rhemes = useTheme();

    console.log(rhemes);

    return (
        <S.Container>
            <S.BtnContainer>
                <S.NavBtn
                    onClick = { () => {
                        setToggleAction({ type: 'isPreview', value: false });
                    } }>
                    Back
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

