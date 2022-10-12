// Core
import styled from 'styled-components';

export const Container = styled.section`
  input {
    width: 100%;
    height: 30px;
    border: none;
  }

  & .react-datepicker__year-option {
    position: relative;
  }

  & 
  .react-datepicker__navigation--years-previous,
  .react-datepicker__navigation--years-upcoming {
    &::before {
      content: '';
      position: absolute;
      left: 3px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 2px;
      background-color: #000;
      transform: rotate(-145deg);
    }

    &::after {
      content: '';
      position: absolute;
      right: 2px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 2px;
      background-color: #000;
      transform: rotate(145deg);
    }
  }

  & .react-datepicker__navigation--years-upcoming {
    transform: rotate(-180deg );
  }
`;
