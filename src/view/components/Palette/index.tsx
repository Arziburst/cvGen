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
    const { handleChangeTheme, handleToggleTheme, themes } = useThemes();

    return (
        <S.Container>
            <S.BtnBox>
                <S.Icon src = { svgPouringIcon } />
                <S.DecorItem />
                <S.List>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'defaultTheme' && themes.current
                                    ? {
                                        backgroundColor: '#e8e5e4', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#e8e5e4' }
                            }
                            onClick = { () => {
                                handleChangeTheme(defaultTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'darkTheme' && themes.current
                                    ? {
                                        backgroundColor: '#343434', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#343434' }
                            }
                            onClick = { () => {
                                handleChangeTheme(darkTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'blueStoneTheme' && themes.current
                                    ? {
                                        backgroundColor: '#42a5f5', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#42a5f5' }
                            }
                            onClick = { () => {
                                handleChangeTheme(blueStoneTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'millbrookTheme' && themes.current
                                    ? {
                                        backgroundColor: '#321911', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#321911' }
                            }
                            onClick = { () => {
                                handleChangeTheme(millbrookTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'mustardTheme' && themes.current
                                    ? {
                                        backgroundColor: '#ffd54f', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#ffd54f' }
                            }
                            onClick = { () => {
                                handleChangeTheme(mustardTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'pastelPink' && themes.current
                                    ? {
                                        backgroundColor: '#bf5f82', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#bf5f82' }
                            }
                            onClick = { () => {
                                handleChangeTheme(pastelPink);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'sapphireTheme' && themes.current
                                    ? {
                                        backgroundColor: '#001970', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#001970' }
                            }
                            onClick = { () => {
                                handleChangeTheme(sapphireTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'vividTangerine' && themes.current
                                    ? {
                                        backgroundColor: '#c96f53', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#c96f53' }
                            }
                            onClick = { () => {
                                handleChangeTheme(vividTangerine);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'wedgewoodTheme' && themes.current
                                    ? {
                                        backgroundColor: '#428e92', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#428e92' }
                            }
                            onClick = { () => {
                                handleChangeTheme(wedgewoodTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                    <S.Item>
                        <S.ThemeBtn
                            style = {
                                themes.name === 'cuttySarkTheme' && themes.current
                                    ? {
                                        backgroundColor: '#29434e', pointerEvents: 'none', border: '2px solid #000', cursor: 'default',
                                    }
                                    : { backgroundColor: '#29434e' }
                            }
                            onClick = { () => {
                                handleChangeTheme(cuttySarkTheme);
                                handleToggleTheme(true);
                            } }
                        />
                    </S.Item>
                </S.List>
                <S.Text>Palette</S.Text>
            </S.BtnBox>
        </S.Container>
    );
};
