// Core
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px 30px;

  @media (max-width: 992px) {
      padding: 10px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.accent.avatar};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme.main.color};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.main.color};
  }
`;

export const UserAvatar = styled.img`
  width:        100%;
  height:       100%;
  border-radius: 50%;
  object-fit:    cover;
`;

export const UserIcon = styled(ReactSVG)`
  width:  60%;
  height: 60%;

  svg {
    fill: ${({ theme }) => theme.main.color}
  }
`;

export const InputFile = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

