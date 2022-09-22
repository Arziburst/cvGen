import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// Assets
import { svgDeleteIcon } from '../../assets/images';

// Styled
const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.hover.removeBtn};
  }

  img {
    height: 15px;
    width: 15px;
  }
`;

const RemoveIcon = styled(ReactSVG)`
  svg {
    color: ${({ theme }) => theme.main.bg};
    width: 16px;
    height: 16px;
  }
`;

type propsType = {
    handleRemoveFunc: React.MouseEventHandler<HTMLButtonElement>
}

export const RemoveBtn: FC<propsType> = ({ handleRemoveFunc  }) => {
    return (
        <RemoveButton onClick = { handleRemoveFunc }>
            <RemoveIcon src = { svgDeleteIcon }/>
        </RemoveButton>
    );
};
