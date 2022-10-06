// Core
import styled from 'styled-components';

export const Container = styled.section`
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
  button:last-child {
    margin: 0 auto;
  }
`;

export const List = styled.ul`
  margin-bottom: 10px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Date = styled.div`
  position: relative;
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

  button {
    position: absolute;
    top: 0;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    border-radius: 0;
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
