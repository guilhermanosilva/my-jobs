import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  @media(max-width: 992px) {
    flex-direction: column;
    width: 100vw;
  }

  main {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    margin: 2rem 0;
  }
`;

const UserSection = styled.section`
  background-color: #4A0D77;
  border-radius: 0px 1.5rem 0px 0px;
  height: 100vh;
  width: 31.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 992px) {
    border-radius: 0px 0px 3rem 0px;
    flex-direction: column;
    height: inherit;
    width: 100vw;
  }
`;

const ScheduleSection = styled.section`
  margin: 1rem;
  max-width: 43.5rem;

  @media(max-width: 992px) {
    margin: 0;
    padding: 0.5rem;
  }
`;

export { Container, UserSection, ScheduleSection };
