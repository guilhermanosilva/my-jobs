import UserInfo from '../UserInfo';

import CurrentDate from '../CurrentDate';

import GlobalStyle from '../../styles/global';
import { Container, Header } from './styles';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <CurrentDate />
          <UserInfo />
        </Header>
        <main>Main</main>
      </Container>
    </>
  );
}

export default Layout;
