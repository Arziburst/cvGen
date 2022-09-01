// Core
import styled from 'styled-components';

// Types
type propsType = {
    isAvatar: boolean
}

export const Container = styled.section`
  padding: 20px 30px;
`;

export const Wrapper = styled.section`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0efed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAvatar = styled.img<propsType>`
  ${({ isAvatar }) => isAvatar ? `
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  ` : `
    width:  60%;
    height: 60%;
  `}
`;

export const InputFile = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

