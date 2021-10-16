import UserInfo from '../UserInfo';
import Header from '../Header';

import GlobalStyle from '../../styles/global';
import { Container, UserSection } from './styles';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <UserSection>
          <UserInfo />
        </UserSection>
        <main>Main</main>
      </Container>
    </>
  );
}

export default Layout;
