// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Components
import { ErrorBoundary } from '../../components';
import { MyDocument } from '../../containers/Document';

// Style
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


const Cv: FC<PropTypes> = () => {
    const { setToggleAction } = useTogglesRedux();

    return (
        <S.Container>
            <MyDocument />
            <button onClick = { () => {
                setToggleAction({ type: 'isReadyCV', value: false });
            } }>
                Back
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Cv />
    </ErrorBoundary>
);

