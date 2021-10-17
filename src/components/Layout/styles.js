import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  main {
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
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
`;

const ScheduleSection = styled.section`
  margin: 1rem;
  max-width: 43.5rem;
`;

export { Container, UserSection, ScheduleSection };
