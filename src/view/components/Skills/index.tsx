// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

import { Text } from '@react-pdf/renderer';

// Styles
import * as S from './styles';

// Types
type SkillType = {
    name: string
    skills: Array<string>
}

type PropTypes = {
    skillsList: Array<SkillType>
    title: string
}

import { List } from '../List';
import { Item } from '../Item';
import { Title } from '../Title';

export const Skills: FC<PropTypes> = ({ skillsList, title }) => {
    return (
        <S.Container>
            <Title  titleText = { title }/>
            <S.SkillItems>
                {skillsList.map(({ name, skills }, index) => (
                    <S.Skill key = { index }>
                        <Text style = {{ fontSize: '13px', marginBottom: '5px' }}>
                            {name}
                        </Text>
                        <List>
                            {skills.map((skill, index) => <Item key = { index }>{skill}</Item>)}
                        </List>
                    </S.Skill>
                ))}
            </S.SkillItems>
        </S.Container>
    );
};
