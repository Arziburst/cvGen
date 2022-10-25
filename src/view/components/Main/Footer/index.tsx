// Core
import React, { FC, useRef } from 'react';

// Assets
import { svgLinkedinIcon, svgMailIcon, svgGithubIcon, svgSuccesIcon } from '../../../../assets/images';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Footer: FC<PropTypes> = () => {
    const ref = useRef<HTMLSpanElement>(null);

    const alertText = () => {
        setTimeout(() => {
            if (ref.current) {
                ref.current.style.opacity = '0';
                ref.current.style.visibility = 'hidden';
            }
        }, 1000);
    };

    return (
        <S.Container id = 'footer'>
            <S.Inner>
                <S.FooterTitle>
                    Contacts:
                </S.FooterTitle>
                <S.List>
                    <S.Item>
                        <S.Link href = 'https://www.linkedin.com/in/dimaponomart683/'>
                            <img
                                alt = 'linkedIn icon'
                                src = { svgLinkedinIcon }
                            />
                            <span>
                                Linkedin
                            </span>
                        </S.Link>
                    </S.Item>
                    <S.Item>
                        <S.Link href = 'https://github.com/DmitryPonomarenko34'>
                            <img
                                alt = 'linkedIn icon'
                                src = { svgGithubIcon }
                            />
                            <span>
                                Developer
                            </span>
                        </S.Link>
                    </S.Item>
                    <S.Item>
                        <S.Link
                            href = 'https://github.com/Arziburst'>
                            <img
                                alt = 'linkedIn icon'
                                src = { svgGithubIcon }
                            />
                            <span>
                                Developer
                            </span>
                        </S.Link>
                    </S.Item>
                    <S.Item>
                        <S.Link
                            href = '#'
                            onClick = { (event) => {
                                event.preventDefault();
                                navigator.clipboard.writeText('dimaponomarenko443@gmail.com');
                                if (ref.current) {
                                    ref.current.style.opacity = '1';
                                    ref.current.style.visibility = 'visible';
                                }
                                alertText();
                            } }>
                            <img
                                alt = 'linkedIn icon'
                                src = { svgMailIcon }
                            />
                            <S.SuccesCopy
                                ref = { ref }
                                style = {{ backgroundImage: `url(${svgSuccesIcon})` }}>
                                Gmail succes copy
                            </S.SuccesCopy>
                            <span>
                                Gmail
                            </span>
                        </S.Link>
                    </S.Item>
                </S.List>
                <S.Copyright>
                    © 2022 ResumeCreator
                </S.Copyright>
            </S.Inner>
        </S.Container>
    );
};
