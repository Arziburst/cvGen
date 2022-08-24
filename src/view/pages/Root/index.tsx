// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Hooks
import { useCustomHooks } from './hooks';

// Components
import { ErrorBoundary, Avatar, Info, Contacts } from '../../components';

// Styles
import * as S from './styles';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleChangeImg, handleChangeFirstname,
        handleChangeLastname, handleChangePosition,
        handleChangeOverview,
        avatar, position, overview,
        firstName, lastName,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Wrapper>
                <S.Column>
                    <Avatar
                        avatarUrl = { avatar }
                        handleChangeImg = { handleChangeImg }
                    />
                </S.Column>
                <S.Column>
                    <Info
                        firstName = { firstName }
                        handleChangeFirstname = { handleChangeFirstname }
                        handleChangeLastname = { handleChangeLastname }
                        handleChangeOverview = { handleChangeOverview }
                        handleChangePosition = { handleChangePosition }
                        lastName = { lastName }
                        overview = { overview }
                        position = { position }
                    />
                </S.Column>
            </S.Wrapper>
            <S.Wrapper>
                <S.SecondColumn>
                    <Contacts />
                </S.SecondColumn>
                <S.SecondColumn>
                    {/* Content */}
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
