// Core
import React, { FC } from 'react';
import { svgPouringIcon } from '../../../assets/images';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Palette: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.BtnBox>
                <S.Icon src = { svgPouringIcon } />
                <S.DecorItem />
                <S.List>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn />
                    </S.Item>
                </S.List>
                <S.Text>Palette</S.Text>
            </S.BtnBox>
        </S.Container>
    );
};
