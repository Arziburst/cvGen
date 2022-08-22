// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Hooks
import { useCustomHooks } from './hooks';

// Components
import { ErrorBoundary, Avatar } from '../../components';

// Styles
import * as S from './styles';
import { Info } from '../../components/Info';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleChangeImg, handleChangeName,
        handleChangePosition, handleChangeOverview,
        avatar,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Column>
                <Avatar
                    avatarUrl = { avatar }
                    handleChangeImg = { handleChangeImg }
                />
            </S.Column>
            <S.Column>
                <Info
                    handleChangeName = { handleChangeName }
                    handleChangeOverview = { handleChangeOverview }
                    handleChangePosition = { handleChangePosition }
                />
            </S.Column>
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
