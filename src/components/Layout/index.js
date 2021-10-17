import UserInfo from '../UserInfo';
import Header from '../Header';

import GlobalStyle from '../../styles/global';
import { Container, ScheduleSection, UserSection } from './styles';
import Welcome from '../Welcome';
import ScheduleForm from '../ScheduleForm';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <UserSection>
          <UserInfo />
        </UserSection>
        <main>
          <ScheduleSection>
            <Welcome />
            <ScheduleForm />
          </ScheduleSection>
        </main>
      </Container>
    </>
  );
}

export default Layout;
