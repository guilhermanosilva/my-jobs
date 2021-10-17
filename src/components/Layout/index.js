import UserInfo from '../UserInfo';
import Header from '../Header';

import GlobalStyle from '../../styles/global';
import Welcome from '../Welcome';
import ScheduleForm from '../ScheduleForm';
import ScheduleList from '../ScheduleList';

import { Container, ScheduleSection, UserSection } from './styles';

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
            <ScheduleList />
          </ScheduleSection>
        </main>
      </Container>
    </>
  );
}

export default Layout;
