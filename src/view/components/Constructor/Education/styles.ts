// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const List = styled.ul`
  margin-bottom: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Date = styled.div`
  display: block;
  margin-bottom: 10px;
  input, textarea {
    background-color: ${({ theme }) => theme.accent.bgSecond};
  }

  input, textarea, p {
    font-family: 'NotoSans500';
    font-weight: 500;
    font-size: 15px;
    color: ${({ theme }) => theme.main.color};
  }
`;

export const Degree = styled(Date)`
`;

export const Description = styled(Date)`
  textarea, p {
    font-family: 'NotoSans400';
    font-weight: 400;
  }
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
