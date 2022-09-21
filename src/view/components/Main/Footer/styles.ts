// Core
import styled from 'styled-components';

export const Container = styled.section`
  background-color: #fff;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
`;

export const List = styled.ul`
  display: block;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  margin-bottom: 5px;
`;

export const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  color: #262b34;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  @media (hover: hover) {
    &:hover {
      color: #FF9640;
      transition: ease 0.2s color;
    }
  }
`;

export const Copyright = styled.p`
  width: 100%;
  text-align: center;
`;

export const FooterTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-family: 'NotoSans800';
  font-weight: 800;
  font-size: 20px;
  color: #4c576b;
  margin-bottom: 10px;
`;

export const SuccesCopy = styled.span`
  display: block;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  padding: 6px 16px;
  min-width: 221px;
  text-align: center;
  color: rgb(204, 232, 205);
  background-color: rgb(12, 19, 13);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: 19px;
  background-position: 8px center;
  transition: ease 0.3s opacity;
  visibility: hidden;
`;
