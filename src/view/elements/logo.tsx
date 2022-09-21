// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Routes
import * as book from '../routes/book';

// Assets
import { logo } from '../../assets/images';

// Styles
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  font-family: 'NotoSans500';
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  img {
    display: block;
    margin-right: 5px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 530px) {
    font-size: 13px;
  }
`;

export const Logo: FC = () => {
    return (
        <HeaderLink
            to = { book.MAIN }>
            <img
                alt = 'logo'
                src = { logo }
            />
            ResumeCreator
        </HeaderLink>
    );
};
