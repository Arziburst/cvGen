// Core
import styled from 'styled-components';

export const Container = styled.section`
  input,
  textarea {
    color: #4c576b;
    font-size: 15px;
    background-color: #e7e7e7;
  }
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const Title = styled.h3`
  position: relative;
  font-family: 'NotoSans800',sans-serif;
  font-weight: 800;
  font-size: 19px;
  color: #4c576b;
  margin-bottom: 10px;
`;

export const List = styled.ul`
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4c576b;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;

export const Name = styled.h4`
  margin-bottom: 3px;
  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;

export const Customer = styled.h5`
  margin-bottom: 3px;
`;

export const Duration = styled.time`
`;

export const Role = styled.h6`
`;

export const Responsibilities = styled.p`
  margin-bottom: 5px;
  textarea {
    color: #4c576b;
    font-size: 15px;
    min-height: 80px;
  }
`;

export const TeamSize = styled.div`
  margin-bottom: 3px;
`;

export const Stack = styled.span`
  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;
