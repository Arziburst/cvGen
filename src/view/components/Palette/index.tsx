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
                        <S.ThemeBtn style = {{ backgroundColor: '#e8e5e4' }} />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn style = {{ backgroundColor: '#8b6b61' }} />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn style = {{ backgroundColor: '#343434' }} />
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
