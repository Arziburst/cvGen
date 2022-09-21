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
  display: flex;
  align-items: center;
  color: #262b34;
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const Copyright = styled.p`
  width: 100%;
  text-align: center;
`;

export const SuccesCopy = styled.span`
  width: 100%;
  display: none;
  text-align: center;
`;
