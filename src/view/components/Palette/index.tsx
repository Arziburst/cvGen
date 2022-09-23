// Core
import React, { FC } from 'react';
import { svgPouringIcon } from '../../../assets/images';

// Bus
import { useThemes } from '../../../bus/client/themes';

// Styles
import * as S from './styles';

import {
    defaultTheme, cuttySarkTheme,
    darkTheme, millbrookTheme,
    mustardTheme, pastelPink,
    sapphireTheme, vividTangerine,
    blueStoneTheme, wedgewoodTheme,
} from '../../../assets';

// Types
type PropTypes = {
    /* type props here */
}

export const Palette: FC<PropTypes> = () => {
    const { handleChangeTheme } = useThemes();

    return (
        <S.Container>
            <S.BtnBox>
                <S.Icon src = { svgPouringIcon } />
                <S.DecorItem />
                <S.List>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#e8e5e4' }}
                            onClick = { () => {
                                handleChangeTheme(defaultTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#343434' }}
                            onClick = { () => {
                                handleChangeTheme(darkTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#42a5f5' }}
                            onClick = { () => {
                                handleChangeTheme(blueStoneTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#321911' }}
                            onClick = { () => {
                                handleChangeTheme(millbrookTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#ffd54f' }}
                            onClick = { () => {
                                handleChangeTheme(mustardTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#bf5f82' }}
                            onClick = { () => {
                                handleChangeTheme(pastelPink);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#001970' }}
                            onClick = { () => {
                                handleChangeTheme(sapphireTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#c96f53' }}
                            onClick = { () => {
                                handleChangeTheme(vividTangerine);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#428e92' }}
                            onClick = { () => {
                                handleChangeTheme(wedgewoodTheme);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {{ backgroundColor: '#29434e' }}
                            onClick = { () => {
                                handleChangeTheme(cuttySarkTheme);
                            } }
                        />
                    </S.Item>
                </S.List>
                <S.Text>Palette</S.Text>
            </S.BtnBox>
        </S.Container>
    );
};
