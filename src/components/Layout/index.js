import UserInfo from '../UserInfo';
import Header from '../Header';

import GlobalStyle from '../../styles/global';
import { Container, UserSection } from './styles';
import Welcome from '../Welcome';

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
          <Welcome />
        </main>
      </Container>
    </>
  );
}

export default Layout;
