// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Routes
import * as book from '../routes/book';

// Styles
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF9640;
  color: #fff;
  text-decoration: none;
  height: 100%;
  min-width: 64px;
  max-width: 200px;
  padding: 6px 16px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-radius: 7px;
  transition: ease 0.2s background-color;

  @media (hover:hover) {
    &:hover {
        background-color: #d97d32;
        transition: ease 0.2s background-color;
    }
  }
`;

// Types
type PropsType = {
    path?: string;
    text?: string;
}

export const NavLink: FC<PropsType> = ({ path = book.CONSTRUCTOR, text = 'Create CV' }) => {
    return (
        <StyledLink to = { path }>
            {text}
        </StyledLink>
    );
};
