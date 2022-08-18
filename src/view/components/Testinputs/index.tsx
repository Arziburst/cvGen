// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Testinputs: FC<PropTypes> = ({ setName }) => {
    return (
        <S.Container>
            <h1>Общая информация</h1>
            <form action = '#'>
                <input
                    placeholder = 'your name'
                    type = 'text'
                    onChange = { setName }
                />
                <input
                    placeholder = 'your age'
                    type = 'number'
                />
            </form>
        </S.Container>
    );
};
