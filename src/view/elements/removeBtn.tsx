import React, { FC } from 'react';
import styled from 'styled-components';

// Assets
import deleteIcon from '../../assets/images/delete-icon.svg';

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
    background-color: #a69b97;
  }

  img {
    height: 15px;
    width: 15px;
  }
`;

type propsType = {
    handleRemoveFunc: React.MouseEventHandler<HTMLButtonElement>
}

export const RemoveBtn: FC<propsType> = ({ handleRemoveFunc  }) => {
    return (
        <RemoveButton onClick = { handleRemoveFunc }>
            <img
                src = { deleteIcon }
            />
        </RemoveButton>
    );
};
