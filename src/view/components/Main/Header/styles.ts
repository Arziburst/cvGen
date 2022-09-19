// Core
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 8px 0;
  background-color: #262b34;
  box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  color: #fff;
`;
export const Navigation = styled.nav`
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const AnchorLink = styled.a`
  color: inherit;
`;
export const CreateResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  color: #262b34;
  text-decoration: none;
  height: 100%;
  min-width: 64px;
  padding: 6px 16px;
`;
