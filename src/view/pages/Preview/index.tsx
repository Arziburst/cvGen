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
            <PdfViewer />
            <button
                style = {{ position: 'fixed', left: '15px', top: '15px', width: '100px', height: '100px' }}
                onClick = { () => {
                    setToggleAction({ type: 'isReadyPreview', value: false });
                } }>
                Back
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Preview />
    </ErrorBoundary>
);

