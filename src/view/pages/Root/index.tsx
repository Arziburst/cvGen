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
        avatar, name,
        position, overview,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Column>
                <Avatar avatarUrl = { avatar }/>
            </S.Column>
            <S.Column>
                <Info
                    handleChangeName = { handleChangeName }
                    name = { name }
                />
                <label>
                    <span style = {{ display: 'block' }}>Position</span>
                    <input
                        defaultValue = { position }
                        type = 'text'
                        onChange = { handleChangePosition }
                    />
                </label>
                <label>
                    <span style = {{ display: 'block' }}>Overview</span>
                    <input
                        defaultValue = { overview }
                        type = 'text'
                        onChange = { handleChangeOverview }
                    />
                </label>
                <label>
                    <span style = {{ display: 'block' }}>Avatar</span>
                    <input
                        type = 'file'
                        onChange = { handleChangeImg }
                    />
                </label>
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
