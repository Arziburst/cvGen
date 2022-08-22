// Core
import styled from 'styled-components';

// Types
type propsType = {
    isAvatar: boolean
}

export const Container = styled.section`
  width: 100%;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0efed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img<propsType>`
  ${({ isAvatar }) => isAvatar ? `
    max-width: 100%;
    border-radius: 50%;
    object-fit: cover;
  ` : `
    width: 80%;
    height: 80%;
  `}
`;

