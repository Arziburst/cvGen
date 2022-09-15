// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 25px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

export const List = styled.ul`
  display: inline-flex;
  align-items: flex-start;
  padding-top: 5px;
  min-height: 100px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #4c576b;
  background-color: #e7e7e7;
  width: 100%;

  @media (max-width: 360px) {
    display: block;
  }
`;

export const Item = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  width: 30.333%;
  border-radius: 11px;
  overflow: hidden;
  margin-right: 10px;

  
  @media (max-width: 992px) {
      width: 45%;
  }

  input {
    background-color: #dbdbdb;
    padding: 5px 10px;
    padding-right: 25px;
    max-width: fit-content;
    font-size: 15px;
    overflow: hidden;
    color: #4c576b;
  }

  button {
    position: absolute;
    right: 5px;
    height: 100%;
    &:hover {
      border-radius: 0;
      height: 32px;
    }
  }

  @media (max-width: 360px) {
    width: 100%;
    margin-right: 0;

    input {
      max-width: 100%;
    }
  }
`;
