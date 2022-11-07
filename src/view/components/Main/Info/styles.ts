// Core
import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 104px 15px 40px;
`;

export const Inner = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-family: 'NotoSans800';
  font-weight: 800;
  font-size: 48px;
  color: #4c576b;
  margin-bottom: 25px;

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  margin-bottom: 25px;
  font-size: 16px;
`;

export const firstScreenLink = styled.div`
  margin: 0 auto;
  height: 80px;
  button {
    margin: 0 auto;
    font-size: 18px;
  }
`;

