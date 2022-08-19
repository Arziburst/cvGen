// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setName: (event: React.ChangeEvent<HTMLInputElement>) => void
    setPosition: (event: React.ChangeEvent<HTMLInputElement>) => void
    setOverview: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Testinputs: FC<PropTypes> = ({ setName, setPosition, setOverview }) => {
    return (
        <S.Container>
            <S.Title>
                Personal Data:
            </S.Title>
            <S.Label>
                <S.LabelText>
                    Name:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Position:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setPosition }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Overview:
                </S.LabelText>
                <S.TextArea
                    style = {{ resize: 'none' }}
                    onChange = { setOverview }
                />
            </S.Label>
            <S.Title>
                Skills:
            </S.Title>
            <S.Label>
                <S.LabelText>
                    Name:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Skill:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Title>
                Experience:
            </S.Title>
            <S.Label>
                <S.LabelText>
                    Project Description:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Customer:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Involvement Duration:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Project Role:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
            <S.Label>
                <S.LabelText>
                    Responsibilities:
                </S.LabelText>
                <S.Input
                    type = 'text'
                    onChange = { setName }
                />
            </S.Label>
        </S.Container>
    );
};
