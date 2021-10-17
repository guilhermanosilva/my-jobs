import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;

  div:nth-last-child(2) input {
    border-radius: 0 6px 6px 0;
  }
`;

const Input = styled.input`
  background-color: #f2f2f2;
  border: 2px solid #f2f2f2;
  border-radius: 6px 0 0 6px;
  color: #6812a5;
  font-weight: 700;
  height: 2rem;
  margin-right: 0.125rem;
  outline: none;
  padding: 0.5rem 1rem;
  width: 7.1875rem;
  transition: 0.25s ease-in;

  &:focus {
    border: 2px solid #6812a5;
  }

  &::placeholder {
    color: #9f9f9f;
    font-weight: normal;
  }

  /* &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  
  &[type='number'] {
    -mox-appearance: none;
    appearance: none;
    width: 7.1875rem;
  } */
`;

const InputDate = styled(Input)`
  width: 16.25rem;
  margin-right: 0.75rem;
  border-radius: 6px;
`;

const ScheduleButton = styled.button`
    background-color: #4A0D77;
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 700;
    height: 2rem;
    margin-left: 0.75rem;
    outline: none;
    padding: 0.5rem 1rem;
    width: 11.25rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: 0.25s ease-in;

    &:hover {
      cursor: pointer;
      background-color: #6812a5;
    }

    &:active {
      background-color: #2e0849;
    }

    &:focus {
      border: 1px solid white;
      box-shadow: 0 0 1px 1px #2e0849;
    }

    img {
      margin-right: 1rem;
    }

    span {
      font-size: 0.875rem;
      text-align: center;
      width: 100%;
    }

`;

export {
  Form, InputDate, Input, ScheduleButton,
};
